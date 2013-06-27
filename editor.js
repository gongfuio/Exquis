define(["net", "csshelper", "evileval"], function(net, csshelper, evileval){

       var makeEditor = function(exquis){
	   var makeAssemblageButtons = function(exquis){
 	       var assemblageLoadButton = document.getElementById("assemblage_load_button"),
	           assemblageSaveButton = document.getElementById("assemblage_save_button"),
	           assemblageSaveAsButton = document.getElementById("assemblage_save_as_button"),
	           modalScreen = document.getElementById("modal"),
	           dialog = document.getElementById("dialog");

               var assemblageSave = function(){
                   net.saveAssemblage(exquis.assName, exquis.assemblageJson());
               };

               assemblageSaveButton.addEventListener('click', assemblageSave, true);
          };
        
       var makeEditorButtons = function(exquis, filename_display) {

	    var animLoadButton = document.getElementById("animation_load_button"),
		animSaveButton = document.getElementById("animation_save_button"),
		animSaveAsButton = document.getElementById("animation_save_as_button"),
		modalScreen = document.getElementById("modal"),
		dialog = document.getElementById("dialog");
	    


	    var populateFilePicker = function(files){

		dialog.innerHTML = '';
		
		for(var i = 0; i < files.length; ++i){
		    var paragraph = document.createElement("p"),
			animationName = files[i].replace(/\.json$/, "");
		    paragraph.innerHTML = animationName;
                    paragraph.id = animationName;

		    paragraph.addEventListener('click', function(e){
			var chosenAnimation = e.target.innerHTML;
			net.loadJson(net.makeJsonName(chosenAnimation), function(animation){
			    var canvasAnim = exquis.targetCell.canvasAnim;
			    evileval.addAnimationToCanvasAnim(animation, canvasAnim);
			    canvasAnim.animationName = chosenAnimation;
			    canvasAnim.setup();
			    exquis.editor.editCanvasAnim(canvasAnim);
			    // hide modal
			    csshelper.addClass(modalScreen, "invisible"); 
			});
			
		    });
		    
		    dialog.appendChild(paragraph);
		}

                dialog.appendChild(makeCancelButton(modalScreen));
		
	    };

            var makeCancelButton = function(modalScreen){
                var cancelButton = document.createElement("button");
		cancelButton.innerHTML = "cancel";
		cancelButton.addEventListener('click', function() { csshelper.addClass(modalScreen, "invisible"); });
                return cancelButton;
            };
            
            var buildPrompt = function(promptText, onAccept){
                var textArea = document.createElement("textarea"),
                    promptParagraph = document.createElement("p"),
                    buttonRow = document.createElement("div");
                
                promptParagraph.innerHTML = promptText;
                dialog.appendChild(promptParagraph);
                dialog.appendChild(textArea);
                dialog.appendChild(buttonRow);

                textArea.setAttribute("id", "prompt_text_area");
    
                var okButton = document.createElement("button");
		okButton.innerHTML = "ok";
                okButton.id = "ok_button";
		okButton.addEventListener('click', function(){
                    onAccept(textArea.value);
		    csshelper.addClass(modalScreen, "invisible");
                });
                buttonRow.appendChild(okButton);
                buttonRow.appendChild(makeCancelButton(modalScreen));
		csshelper.removeClass(modalScreen, "invisible");
            };
            
	    var animLoad = function(){
	    	
		net.loadJson("/animations/", function(files){
		    csshelper.removeClass(modalScreen, "invisible");

		    populateFilePicker(files);
		});
	    };

	    animLoadButton.addEventListener('click', animLoad, true);
	    
	    var animSave = function(){
		net.saveAnimation(exquis.targetCell.canvasAnim);
	    };

	    animSaveButton.addEventListener('click', animSave, true);

	    var animSaveAs = function(){
                buildPrompt("enter file name",function(fileName){
		    if (fileName){
		        net.saveAnimation(exquis.targetCell.canvasAnim, null, fileName);
		        filename_display.innerText = fileName;
		    }
                });
	    };
	    animSaveAsButton.addEventListener('click', animSaveAs, true);
	};

	var makeTextAreas = function(exquis){
	    var textAreaSetup = document.getElementById("text_area_setup"),
		textAreaDraw = document.getElementById("text_area_draw");

	    textAreaDraw.className = "code_valid";
	    textAreaSetup.className = "code_valid";

	    var onEditorSetupChange = function(){
		var targetCell = exquis.targetCell;
		targetCell.canvasAnim.updateSetup = function(){
		    var setupString = textAreaSetup.value,
			canvasAnim = targetCell.canvasAnim;
		    try{
			evileval.addSetupToCanvasAnim(canvasAnim, setupString);
			canvasAnim.setup();
			textAreaSetup.className = "code_valid";     
		    }catch(e){
			textAreaSetup.className = "code_invalid";     
		    }
		};
	    };

	    var onEditorDrawChange = function(){
		var targetCell = exquis.targetCell;
		targetCell.canvasAnim.updateDraw = function(neighbouringBorders){
		    var drawString = textAreaDraw.value,
			canvasAnim = targetCell.canvasAnim,
			drawBackup = canvasAnim.animation.draw;
		    try{
			evileval.addDrawToCanvasAnim(canvasAnim, drawString);
			canvasAnim.draw(neighbouringBorders);
			textAreaDraw.className = "code_valid";     
		    }catch(e){
			throw e;
			console.error(e);
			canvasAnim.animation.draw = drawBackup;
			canvasAnim.draw(neighbouringBorders);
			textAreaDraw.className = "code_invalid";     
		    }
		};
		
	    };


	    textAreaSetup.onkeyup = onEditorSetupChange;
	    textAreaDraw.onkeyup = onEditorDrawChange; 

	    return { textAreaSetup: textAreaSetup,
		     textAreaDraw: textAreaDraw,
	             onEditorSetupChange: onEditorSetupChange,
	             onEditorDrawChange: onEditorDrawChange
		   };
	};

	var textAreas = makeTextAreas(exquis),
            editor = document.getElementById("editor"),
            filename_display = document.getElementById("filename_display");
        makeEditorButtons(exquis, filename_display);
        makeAssemblageButtons(exquis);

	var update = function(textAreas, setupString, drawString, animationName){
	    setEditorContent(textAreas, setupString, drawString, animationName);
	    textAreas.onEditorSetupChange();
	    textAreas.onEditorDrawChange();
	};
	
	var setEditorContent = function(textAreas, setupString, drawString, animationName){
            textAreas.textAreaSetup.value = setupString;
            textAreas.textAreaDraw.value = drawString;
            filename_display.innerText = animationName;
	};
	
	return {
	    editCanvasAnim: function(canvasAnim){
		setEditorContent(textAreas,
				 canvasAnim.animation.setupString,
				 canvasAnim.animation.drawString,
				 canvasAnim.animationName);
	    },
	    show: function(){
		editor.className = "";
	    },
	    hide: function(){
		// unselect edition
		editor.className = "invisible";
	    }};

    };

    return makeEditor;
});

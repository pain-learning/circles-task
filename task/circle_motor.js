/********************* 
 * Circle_Motor Test *
 *********************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'circle_motor';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '', 'study': '', 'group': '', 'qpid': ''};

// Start code blocks for 'Before Experiment'
// set points counter
var points;
var block_cnt;
points = 0;
block_cnt = 1;
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(final_scoreRoutineBegin());
flowScheduler.add(final_scoreRoutineEachFrame());
flowScheduler.add(final_scoreRoutineEnd());
flowScheduler.add(end_thanksRoutineBegin());
flowScheduler.add(end_thanksRoutineEachFrame());
flowScheduler.add(end_thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'img/empty.png', 'path': 'img/empty.png'},
    {'name': 'img/instru3.png', 'path': 'img/instru3.png'},
    {'name': 'img/p25.png', 'path': 'img/p25.png'},
    {'name': 'blocks/conds_file_2.xlsx', 'path': 'blocks/conds_file_2.xlsx'},
    {'name': 'blocks/blocks_order.xlsx', 'path': 'blocks/blocks_order.xlsx'},
    {'name': 'img/p100.png', 'path': 'img/p100.png'},
    {'name': 'img/instru1.png', 'path': 'img/instru1.png'},
    {'name': 'img/instru1.svg', 'path': 'img/instru1.svg'},
    {'name': 'img/instru2.png', 'path': 'img/instru2.png'},
    {'name': 'img/p50.png', 'path': 'img/p50.png'},
    {'name': 'blocks/conds_file_4.xlsx', 'path': 'blocks/conds_file_4.xlsx'},
    {'name': 'instructions.xlsx', 'path': 'instructions.xlsx'},
    {'name': 'blocks/blocks_order_demo.xlsx', 'path': 'blocks/blocks_order_demo.xlsx'},
    {'name': 'img/go.png', 'path': 'img/go.png'},
    {'name': 'img/solid.png', 'path': 'img/solid.png'},
    {'name': 'blocks/conds_file_1.xlsx', 'path': 'blocks/conds_file_1.xlsx'},
    {'name': 'img/p75.png', 'path': 'img/p75.png'},
    {'name': 'img/instruction.png', 'path': 'img/instruction.png'},
    {'name': 'img/start.png', 'path': 'img/start.png'},
    {'name': 'img/instru0.png', 'path': 'img/instru0.png'},
    {'name': 'blocks/conds_file_3.xlsx', 'path': 'blocks/conds_file_3.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var setupClock;
var thisExp;
var win;
var event;
var shuffle;
var progress;
var instructionsClock;
var instructs_text;
var instruct_done;
var instr_done_button;
var instr_done_label;
var instr_done_touch;
var image_3;
var start_buttonClock;
var start_press;
var start_img;
var fixation_2Clock;
var fixation_0;
var trialClock;
var touch_resp;
var solid;
var empty;
var pop_2Clock;
var text;
var block_scoreClock;
var text_timer;
var block_cash;
var txt_part;
var progImg;
var final_scoreClock;
var score;
var end_thanksClock;
var thanks_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  thisExp = psychoJS.experiment;
  win = psychoJS.window;
  event = psychoJS.eventManager;
  Array.prototype.append = [].push;
  shuffle = util.shuffle;
  
  progress = 0;
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  //  if ((expInfo["order"] === "random")) {
  //      expInfo["order"] = (Math.floor((Math.random() * ((2 - 1) + 1))) + 1);
  //  }
  //  blocks_file = (("blocks_order" + expInfo["order"].toString()) + ".xlsx");
  instructs_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructs_text',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.3], height: 0.04,  wrapWidth: 0.6, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  instruct_done = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_done_button = new visual.Rect ({
    win: psychoJS.window, name: 'instr_done_button', units : 'height', 
    width: [0.4, 0.1][0], height: [0.4, 0.1][1],
    ori: 0, pos: [0, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color('darkgreen'),
    fillColor: new util.Color('lightgreen'),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  instr_done_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_done_label',
    text: 'Next...',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('darkgreen'),  opacity: 1,
    depth: -4.0 
  });
  
  instr_done_touch = new core.Mouse({
    win: psychoJS.window,
  });
  instr_done_touch.mouseClock = new util.Clock();
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -6.0 
  });
  // Initialize components for Routine "start_button"
  start_buttonClock = new util.Clock();
  start_press = new core.Mouse({
    win: psychoJS.window,
  });
  start_press.mouseClock = new util.Clock();
  start_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'start_img', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "fixation_2"
  fixation_2Clock = new util.Clock();
  fixation_0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_0',
    text: '+',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  touch_resp = new core.Mouse({
    win: psychoJS.window,
  });
  touch_resp.mouseClock = new util.Clock();
  solid = new visual.ImageStim({
    win : psychoJS.window,
    name : 'solid', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.4, 0.4],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  empty = new visual.ImageStim({
    win : psychoJS.window,
    name : 'empty', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.4, 0.4],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "pop_2"
  pop_2Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "block_score"
  block_scoreClock = new util.Clock();
  text_timer = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_timer',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  block_cash = new visual.TextStim({
    win: psychoJS.window,
    name: 'block_cash',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 0.6, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  txt_part = " ";
  
  progImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'progImg', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.39)], size : [0.5, 0.0758],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "final_score"
  final_scoreClock = new util.Clock();
  score = new visual.TextStim({
    win: psychoJS.window,
    name: 'score',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: 0.6, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "end_thanks"
  end_thanksClock = new util.Clock();
  thanks_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks_text',
    text: 'Thanks for playing.\n\nDo NOT press the ‘escape’ key.\n\nSaving results, please wait…',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.06,  wrapWidth: 0.6, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var setupComponents;
function setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'setup'-------
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    setupComponents = [];
    
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function setupRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'setup'-------
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setupRoutineEnd() {
  return async function () {
    //------Ending Routine 'setup'-------
    for (const thisComponent of setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials_2;
var currentLoop;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'instructions.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      const snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(instructionsRoutineBegin(snapshot));
      trials_2LoopScheduler.add(instructionsRoutineEachFrame());
      trials_2LoopScheduler.add(instructionsRoutineEnd());
      trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'blocks/blocks_order.xlsx',
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of blocks) {
      const snapshot = blocks.getSnapshot();
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(start_buttonRoutineBegin(snapshot));
      blocksLoopScheduler.add(start_buttonRoutineEachFrame());
      blocksLoopScheduler.add(start_buttonRoutineEnd());
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blocksLoopScheduler.add(trialsLoopScheduler);
      blocksLoopScheduler.add(trialsLoopEnd);
      blocksLoopScheduler.add(block_scoreRoutineBegin(snapshot));
      blocksLoopScheduler.add(block_scoreRoutineEachFrame());
      blocksLoopScheduler.add(block_scoreRoutineEnd());
      blocksLoopScheduler.add(endLoopIteration(blocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: condsFile,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(fixation_2RoutineBegin(snapshot));
      trialsLoopScheduler.add(fixation_2RoutineEachFrame());
      trialsLoopScheduler.add(fixation_2RoutineEnd());
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(pop_2RoutineBegin(snapshot));
      trialsLoopScheduler.add(pop_2RoutineEachFrame());
      trialsLoopScheduler.add(pop_2RoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


async function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var _instruct_done_allKeys;
var gotValidClick;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instructs_text.setText(Instruction);
    instruct_done.keys = undefined;
    instruct_done.rt = undefined;
    _instruct_done_allKeys = [];
    // setup some python lists for storing info about the instr_done_touch
    instr_done_touch.clicked_name = [];
    gotValidClick = false; // until a click is received
    image_3.setImage(Images);
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instructs_text);
    instructionsComponents.push(instruct_done);
    instructionsComponents.push(instr_done_button);
    instructionsComponents.push(instr_done_label);
    instructionsComponents.push(instr_done_touch);
    instructionsComponents.push(image_3);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function instructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions'-------
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructs_text* updates
    if (t >= 0.0 && instructs_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructs_text.tStart = t;  // (not accounting for frame time here)
      instructs_text.frameNStart = frameN;  // exact frame index
      
      instructs_text.setAutoDraw(true);
    }

    
    // *instruct_done* updates
    if (t >= 0.0 && instruct_done.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_done.tStart = t;  // (not accounting for frame time here)
      instruct_done.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruct_done.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruct_done.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruct_done.clearEvents(); });
    }

    if (instruct_done.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruct_done.getKeys({keyList: ['space'], waitRelease: false});
      _instruct_done_allKeys = _instruct_done_allKeys.concat(theseKeys);
      if (_instruct_done_allKeys.length > 0) {
        instruct_done.keys = _instruct_done_allKeys[_instruct_done_allKeys.length - 1].name;  // just the last key pressed
        instruct_done.rt = _instruct_done_allKeys[_instruct_done_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instr_done_button* updates
    if (t >= 0.0 && instr_done_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_button.tStart = t;  // (not accounting for frame time here)
      instr_done_button.frameNStart = frameN;  // exact frame index
      
      instr_done_button.setAutoDraw(true);
    }

    
    // *instr_done_label* updates
    if (t >= 0.0 && instr_done_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_label.tStart = t;  // (not accounting for frame time here)
      instr_done_label.frameNStart = frameN;  // exact frame index
      
      instr_done_label.setAutoDraw(true);
    }

    // *instr_done_touch* updates
    if (t >= 0.0 && instr_done_touch.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_touch.tStart = t;  // (not accounting for frame time here)
      instr_done_touch.frameNStart = frameN;  // exact frame index
      
      instr_done_touch.status = PsychoJS.Status.STARTED;
      instr_done_touch.mouseClock.reset();
      prevButtonState = instr_done_touch.getPressed();  // if button is down already this ISN'T a new click
      }
    if (instr_done_touch.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = instr_done_touch.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [instr_done_button]) {
            if (obj.contains(instr_done_touch)) {
              gotValidClick = true;
              instr_done_touch.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function instructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    instruct_done.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = instr_done_touch.getPos();
    _mouseButtons = instr_done_touch.getPressed();
    psychoJS.experiment.addData('instr_done_touch.x', _mouseXYs[0]);
    psychoJS.experiment.addData('instr_done_touch.y', _mouseXYs[1]);
    psychoJS.experiment.addData('instr_done_touch.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('instr_done_touch.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('instr_done_touch.rightButton', _mouseButtons[2]);
    if (instr_done_touch.clicked_name.length > 0) {
      psychoJS.experiment.addData('instr_done_touch.clicked_name', instr_done_touch.clicked_name[0]);}
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var start_buttonComponents;
function start_buttonRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'start_button'-------
    t = 0;
    start_buttonClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the start_press
    start_press.clicked_name = [];
    gotValidClick = false; // until a click is received
    if ((progress > 0)) {
        start_img.setImage("img/go.png");
    } else {
        start_img.setImage("img/start.png");
    }
    
    // keep track of which components have finished
    start_buttonComponents = [];
    start_buttonComponents.push(start_press);
    start_buttonComponents.push(start_img);
    
    for (const thisComponent of start_buttonComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var countdown;
function start_buttonRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'start_button'-------
    // get current time
    t = start_buttonClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *start_press* updates
    if (t >= 0.0 && start_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_press.tStart = t;  // (not accounting for frame time here)
      start_press.frameNStart = frameN;  // exact frame index
      
      start_press.status = PsychoJS.Status.STARTED;
      start_press.mouseClock.reset();
      prevButtonState = start_press.getPressed();  // if button is down already this ISN'T a new click
      }
    if (start_press.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = start_press.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [start_img]) {
            if (obj.contains(start_press)) {
              gotValidClick = true;
              start_press.clicked_name.push(obj.name)
            }
          }
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *start_img* updates
    if (t >= 0.0 && start_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_img.tStart = t;  // (not accounting for frame time here)
      start_img.frameNStart = frameN;  // exact frame index
      
      start_img.setAutoDraw(true);
    }

    countdown = Math.round((1 - t));
    if (((countdown === 0) && (progress > 0))) {
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of start_buttonComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_buttonRoutineEnd() {
  return async function () {
    //------Ending Routine 'start_button'-------
    for (const thisComponent of start_buttonComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = start_press.getPos();
    _mouseButtons = start_press.getPressed();
    psychoJS.experiment.addData('start_press.x', _mouseXYs[0]);
    psychoJS.experiment.addData('start_press.y', _mouseXYs[1]);
    psychoJS.experiment.addData('start_press.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('start_press.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('start_press.rightButton', _mouseButtons[2]);
    if (start_press.clicked_name.length > 0) {
      psychoJS.experiment.addData('start_press.clicked_name', start_press.clicked_name[0]);}
    // the Routine "start_button" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fixation_2Components;
function fixation_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'fixation_2'-------
    t = 0;
    fixation_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixation_2Components = [];
    fixation_2Components.push(fixation_0);
    
    for (const thisComponent of fixation_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixation_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'fixation_2'-------
    // get current time
    t = fixation_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_0* updates
    if (t >= 0.0 && fixation_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_0.tStart = t;  // (not accounting for frame time here)
      fixation_0.frameNStart = frameN;  // exact frame index
      
      fixation_0.setAutoDraw(true);
    }

    frameRemains = 1  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixation_0.status === PsychoJS.Status.STARTED || fixation_0.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixation_0.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixation_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixation_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'fixation_2'-------
    for (const thisComponent of fixation_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var size;
var x;
var random;
var flip_flag;
var random2;
var solid_y;
var y_diff;
var empty_y;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the touch_resp
    // current position of the mouse:
    touch_resp.x = [];
    touch_resp.y = [];
    touch_resp.leftButton = [];
    touch_resp.midButton = [];
    touch_resp.rightButton = [];
    touch_resp.time = [];
    touch_resp.clicked_name = [];
    gotValidClick = false; // until a click is received
    solid.setImage("img/solid.png");
    empty.setImage("img/empty.png");
    size = 0.3;
    solid.setSize([size, size]);
    empty.setSize([size, size]);
    x = 0;
    random = Math.random();
    if (random>0.5) {
        flip_flag = 1;
        }
    else {
        flip_flag = -1;
        }
    random2 = Math.random();
    solid_y = flip_flag * random2 * 0.3; // max 1
    y_diff = flip_flag * random2 * 0.07; // max 0.1
    //solid_x = np.random.normal((flip_flag * 0.5), 0.05);
    //x_diff = np.random.normal((flip_flag * 0.1), 0.05);
    empty_y = (solid_y - y_diff);
    solid.setPos([x, solid_y]);
    empty.setPos([x, empty_y]);
    
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(touch_resp);
    trialComponents.push(solid);
    trialComponents.push(empty);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var mouse_down_detected;
var mouse_click;
var mouse_loc;
function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *touch_resp* updates
    if (t >= 0 && touch_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      touch_resp.tStart = t;  // (not accounting for frame time here)
      touch_resp.frameNStart = frameN;  // exact frame index
      
      touch_resp.status = PsychoJS.Status.STARTED;
      touch_resp.mouseClock.reset();
      prevButtonState = touch_resp.getPressed();  // if button is down already this ISN'T a new click
      }
    if (touch_resp.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = touch_resp.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = touch_resp.getPos();
          touch_resp.x.push(_mouseXYs[0]);
          touch_resp.y.push(_mouseXYs[1]);
          touch_resp.leftButton.push(_mouseButtons[0]);
          touch_resp.midButton.push(_mouseButtons[1]);
          touch_resp.rightButton.push(_mouseButtons[2]);
          touch_resp.time.push(touch_resp.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [solid,empty]) {
            if (obj.contains(touch_resp)) {
              gotValidClick = true;
              touch_resp.clicked_name.push(obj.name)
            }
          }
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    mouse_down_detected = false;
    mouse_click = touch_resp.getPressed();
    if (mouse_click[0]) {
        if ((! mouse_down_detected)) {
            mouse_loc = touch_resp.getPos();
            mouse_down_detected = true;
        }
    } else {
        mouse_down_detected = false;
    }
    
    
    // *solid* updates
    if (t >= 0 && solid.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      solid.tStart = t;  // (not accounting for frame time here)
      solid.frameNStart = frameN;  // exact frame index
      
      solid.setAutoDraw(true);
    }

    
    // *empty* updates
    if (t >= 0 && empty.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      empty.tStart = t;  // (not accounting for frame time here)
      empty.frameNStart = frameN;  // exact frame index
      
      empty.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (touch_resp.x) {  psychoJS.experiment.addData('touch_resp.x', touch_resp.x[0])};
    if (touch_resp.y) {  psychoJS.experiment.addData('touch_resp.y', touch_resp.y[0])};
    if (touch_resp.leftButton) {  psychoJS.experiment.addData('touch_resp.leftButton', touch_resp.leftButton[0])};
    if (touch_resp.midButton) {  psychoJS.experiment.addData('touch_resp.midButton', touch_resp.midButton[0])};
    if (touch_resp.rightButton) {  psychoJS.experiment.addData('touch_resp.rightButton', touch_resp.rightButton[0])};
    if (touch_resp.time) {  psychoJS.experiment.addData('touch_resp.time', touch_resp.time[0])};
    if (touch_resp.clicked_name) {  psychoJS.experiment.addData('touch_resp.clicked_name', touch_resp.clicked_name[0])};
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var solid_in;
var empty_in;
var both_in;
var hsize;
var msg;
var pop_2Components;
function pop_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'pop_2'-------
    t = 0;
    pop_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    var click_x, click_y;
    [click_x, click_y] = mouse_loc;
    solid_in = false;
    empty_in = false;
    both_in = false;
    hsize = (size / 2);
    if (((Math.abs((click_y - solid_y)) <= hsize) && (Math.abs((click_y - empty_y)) <= hsize))) {
        solid_in = true;
        empty_in = true;
    } else {
        if (((Math.abs((click_y - solid_y)) <= hsize) && (Math.abs((click_y - empty_y)) > hsize))) {
            solid_in = true;
        } else {
            if (((Math.abs((click_y - solid_y)) > hsize) && (Math.abs((click_y - empty_y)) <= hsize))) {
                empty_in = true;
            }
        }
    }
    if (((solid_in === true) && (empty_in === true))) {
        both_in = true;
    }
    if (((solid_in === true) && (both_in === false))) {
        msg = "Lose! \n-200";
        points -= 200;
    } else {
        if (((empty_in === true) && (both_in === false))) {
            msg = "Win! \n+100";
            points += 100;
        } else {
            if ((both_in === true)) {
                msg = "Lose! \n-200";
                points -= 200;
            } else {
                msg = "None";
                points += 0;
            }
        }
    }
    text.setText(msg);
    //point0.setText(("points: " + points.toString()));
    //point1.setText(("points: " + points.toString()));
    //point3.setText(("points: " + points.toString()));
    thisExp.addData("points", points);
    thisExp.addData("circle_solid", solid_in);
    thisExp.addData("circle_empty", empty_in);
    thisExp.addData("circle_both", both_in);
    thisExp.addData("solid_y", solid_y);
    thisExp.addData("click_y", click_y);
    thisExp.addData("empty_y", empty_y);
    thisExp.addData("hsize", hsize);
    // keep track of which components have finished
    pop_2Components = [];
    pop_2Components.push(text);
    
    for (const thisComponent of pop_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pop_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'pop_2'-------
    // get current time
    t = pop_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pop_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pop_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'pop_2'-------
    for (const thisComponent of pop_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var timer_text;
var block_scoreComponents;
function block_scoreRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'block_score'-------
    t = 0;
    block_scoreClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(9.000000);
    // update component parameters for each repeat
    progress = (progress + 25);
    progImg.setImage((("img/p" + progress.toString()) + ".png"));
    if ((progress < 100)) {
        txt_part = (("Well done! You are " + progress.toString()) + "% through! Keep going!");
        block_cash.setText(((((((txt_part + "\n") + "\nYour current total is ") + points.toString()) + " points.") + "\n") + "\nTake a short rest and get ready to play."));
    }
    if ((progress === 100)) {
        txt_part = "Well done! You have finished the game. Please wait.";
        block_cash.setText(((((txt_part + "\n") + "\nYour total remaining is ") + points.toString()) + " points."));
    }
    
    timer_text = "";
    
    // keep track of which components have finished
    block_scoreComponents = [];
    block_scoreComponents.push(text_timer);
    block_scoreComponents.push(block_cash);
    block_scoreComponents.push(progImg);
    
    for (const thisComponent of block_scoreComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function block_scoreRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'block_score'-------
    // get current time
    t = block_scoreClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_timer* updates
    if (t >= 0.0 && text_timer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_timer.tStart = t;  // (not accounting for frame time here)
      text_timer.frameNStart = frameN;  // exact frame index
      
      text_timer.setAutoDraw(true);
    }

    frameRemains = 0.0 + 9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_timer.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_timer.setAutoDraw(false);
    }
    
    if (text_timer.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_timer.setText(timer_text, false);
    }
    
    // *block_cash* updates
    if (t >= 0.0 && block_cash.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_cash.tStart = t;  // (not accounting for frame time here)
      block_cash.frameNStart = frameN;  // exact frame index
      
      block_cash.setAutoDraw(true);
    }

    frameRemains = 0.0 + 9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (block_cash.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      block_cash.setAutoDraw(false);
    }
    
    // *progImg* updates
    if (t >= 0.0 && progImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progImg.tStart = t;  // (not accounting for frame time here)
      progImg.frameNStart = frameN;  // exact frame index
      
      progImg.setAutoDraw(true);
    }

    frameRemains = 0.0 + 9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (progImg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      progImg.setAutoDraw(false);
    }
    countdown = Math.round((8.5 - t));
    if ((countdown === 0)) {
        if ((progress === 100)) {
            timer_text = "";
        } else {
            timer_text = "Go!";
        }
    } else {
        if ((progress === 100)) {
            timer_text = (("The game will end in: " + countdown.toString()) + " seconds.");
        } else {
            timer_text = (("The task will start again in: " + countdown.toString()) + " seconds.");
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of block_scoreComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block_scoreRoutineEnd() {
  return async function () {
    //------Ending Routine 'block_score'-------
    for (const thisComponent of block_scoreComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var final_scoreComponents;
function final_scoreRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'final_score'-------
    t = 0;
    final_scoreClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    score.setText(((("You have earned " + points.toString()) + " points!") + "\nWell done!"));
    
    // keep track of which components have finished
    final_scoreComponents = [];
    final_scoreComponents.push(score);
    
    for (const thisComponent of final_scoreComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function final_scoreRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'final_score'-------
    // get current time
    t = final_scoreClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *score* updates
    if (t >= 0.0 && score.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      score.tStart = t;  // (not accounting for frame time here)
      score.frameNStart = frameN;  // exact frame index
      
      score.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (score.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      score.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of final_scoreComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function final_scoreRoutineEnd() {
  return async function () {
    //------Ending Routine 'final_score'-------
    for (const thisComponent of final_scoreComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var end_thanksComponents;
function end_thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end_thanks'-------
    t = 0;
    end_thanksClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    end_thanksComponents = [];
    end_thanksComponents.push(thanks_text);
    
    for (const thisComponent of end_thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_thanksRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'end_thanks'-------
    // get current time
    t = end_thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks_text* updates
    if (t >= 0.0 && thanks_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks_text.tStart = t;  // (not accounting for frame time here)
      thanks_text.frameNStart = frameN;  // exact frame index
      
      thanks_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (thanks_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thanks_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_thanksRoutineEnd() {
  return async function () {
    //------Ending Routine 'end_thanks'-------
    for (const thisComponent of end_thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

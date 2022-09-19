#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Fri Jul  8 10:39:49 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

import numpy as np

# set points counter
points = 0

# block count
block_cnt = 1


# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'Circle Motor'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '', 'study': '', 'group': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data' + os.path.sep + '%s_%s' %(expInfo['participant'], expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Volumes/GoogleDrive/Shared drives/Cam Nox Lab/APDP/apdp_public_tasks/circles_task_public/circle_motor_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1920, 1080], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color='black', colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "setup"
setupClock = core.Clock()
#thisExp=psychoJS.experiment;
#win=psychoJS.window;
#event=psychoJS.eventManager;
#Array.prototype.append = [].push;
#shuffle = util.shuffle;
progress = 0

# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
#if expInfo['order']=='random':
#    expInfo['order'] = randint(1,2)
#    
#blocks_file = "blocks_order"+str(expInfo['order'])+".xlsx"
instructs_text = visual.TextStim(win=win, name='instructs_text',
    text='',
    font='Arial',
    units='height', pos=[0, 0.3], height=0.04, wrapWidth=0.6, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
instruct_done = keyboard.Keyboard()
instr_done_button = visual.Rect(
    win=win, name='instr_done_button',units='height', 
    width=(0.4, 0.1)[0], height=(0.4, 0.1)[1],
    ori=0, pos=(0, -0.4),
    lineWidth=1,     colorSpace='rgb',  lineColor='darkgreen', fillColor='lightgreen',
    opacity=1, depth=-3.0, interpolate=True)
instr_done_label = visual.TextStim(win=win, name='instr_done_label',
    text='Next...',
    font='Arial',
    units='height', pos=(0, -0.4), height=0.05, wrapWidth=None, ori=0, 
    color='darkgreen', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
instr_done_touch = event.Mouse(win=win)
x, y = [None, None]
instr_done_touch.mouseClock = core.Clock()
image_3 = visual.ImageStim(
    win=win,
    name='image_3', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-6.0)

# Initialize components for Routine "start_button"
start_buttonClock = core.Clock()
start_press = event.Mouse(win=win)
x, y = [None, None]
start_press.mouseClock = core.Clock()
start_img = visual.ImageStim(
    win=win,
    name='start_img', 
    image=None, mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)

# Initialize components for Routine "fixation_2"
fixation_2Clock = core.Clock()
fixation_0 = visual.TextStim(win=win, name='fixation_0',
    text='+',
    font='Arial',
    units='height', pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "trial"
trialClock = core.Clock()
touch_resp = event.Mouse(win=win)
x, y = [None, None]
touch_resp.mouseClock = core.Clock()
solid = visual.ImageStim(
    win=win,
    name='solid', units='height', 
    image=None, mask=None,
    ori=0, pos=[0,0], size=(0.4, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
empty = visual.ImageStim(
    win=win,
    name='empty', 
    image=None, mask=None,
    ori=0, pos=[0,0], size=(0.4, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)

# Initialize components for Routine "pop_2"
pop_2Clock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "block_score"
block_scoreClock = core.Clock()
text_timer = visual.TextStim(win=win, name='text_timer',
    text='',
    font='Arial',
    pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
block_cash = visual.TextStim(win=win, name='block_cash',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=0.6, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
txt_part = ' '
progImg = visual.ImageStim(
    win=win,
    name='progImg', 
    image=None, mask=None,
    ori=0.0, pos=(0, -0.39), size=(0.5, 0.0758),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)

# Initialize components for Routine "final_score"
final_scoreClock = core.Clock()
score = visual.TextStim(win=win, name='score',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.06, wrapWidth=0.6, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "end_thanks"
end_thanksClock = core.Clock()
thanks_text = visual.TextStim(win=win, name='thanks_text',
    text='Thanks for playing.\n\nDo NOT press the ‘escape’ key.\n\nSaving results, please wait…',
    font='Arial',
    units='height', pos=[0, 0], height=0.06, wrapWidth=0.6, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "setup"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
setupComponents = []
for thisComponent in setupComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
setupClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "setup"-------
while continueRoutine:
    # get current time
    t = setupClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=setupClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in setupComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "setup"-------
for thisComponent in setupComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "setup" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_2 = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('instructions.xlsx'),
    seed=None, name='trials_2')
thisExp.addLoop(trials_2)  # add the loop to the experiment
thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
if thisTrial_2 != None:
    for paramName in thisTrial_2:
        exec('{} = thisTrial_2[paramName]'.format(paramName))

for thisTrial_2 in trials_2:
    currentLoop = trials_2
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
    if thisTrial_2 != None:
        for paramName in thisTrial_2:
            exec('{} = thisTrial_2[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "instructions"-------
    continueRoutine = True
    # update component parameters for each repeat
    instructs_text.setText(Instruction)
    instruct_done.keys = []
    instruct_done.rt = []
    _instruct_done_allKeys = []
    # setup some python lists for storing info about the instr_done_touch
    instr_done_touch.clicked_name = []
    gotValidClick = False  # until a click is received
    image_3.setImage(Images)
    # keep track of which components have finished
    instructionsComponents = [instructs_text, instruct_done, instr_done_button, instr_done_label, instr_done_touch, image_3]
    for thisComponent in instructionsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "instructions"-------
    while continueRoutine:
        # get current time
        t = instructionsClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=instructionsClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instructs_text* updates
        if instructs_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instructs_text.frameNStart = frameN  # exact frame index
            instructs_text.tStart = t  # local t and not account for scr refresh
            instructs_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instructs_text, 'tStartRefresh')  # time at next scr refresh
            instructs_text.setAutoDraw(True)
        
        # *instruct_done* updates
        waitOnFlip = False
        if instruct_done.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instruct_done.frameNStart = frameN  # exact frame index
            instruct_done.tStart = t  # local t and not account for scr refresh
            instruct_done.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instruct_done, 'tStartRefresh')  # time at next scr refresh
            instruct_done.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(instruct_done.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(instruct_done.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if instruct_done.status == STARTED and not waitOnFlip:
            theseKeys = instruct_done.getKeys(keyList=['space'], waitRelease=False)
            _instruct_done_allKeys.extend(theseKeys)
            if len(_instruct_done_allKeys):
                instruct_done.keys = _instruct_done_allKeys[-1].name  # just the last key pressed
                instruct_done.rt = _instruct_done_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *instr_done_button* updates
        if instr_done_button.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_done_button.frameNStart = frameN  # exact frame index
            instr_done_button.tStart = t  # local t and not account for scr refresh
            instr_done_button.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_done_button, 'tStartRefresh')  # time at next scr refresh
            instr_done_button.setAutoDraw(True)
        
        # *instr_done_label* updates
        if instr_done_label.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_done_label.frameNStart = frameN  # exact frame index
            instr_done_label.tStart = t  # local t and not account for scr refresh
            instr_done_label.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_done_label, 'tStartRefresh')  # time at next scr refresh
            instr_done_label.setAutoDraw(True)
        # *instr_done_touch* updates
        if instr_done_touch.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_done_touch.frameNStart = frameN  # exact frame index
            instr_done_touch.tStart = t  # local t and not account for scr refresh
            instr_done_touch.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_done_touch, 'tStartRefresh')  # time at next scr refresh
            instr_done_touch.status = STARTED
            instr_done_touch.mouseClock.reset()
            prevButtonState = instr_done_touch.getPressed()  # if button is down already this ISN'T a new click
        if instr_done_touch.status == STARTED:  # only update if started and not finished!
            buttons = instr_done_touch.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(instr_done_button)
                        clickableList = instr_done_button
                    except:
                        clickableList = [instr_done_button]
                    for obj in clickableList:
                        if obj.contains(instr_done_touch):
                            gotValidClick = True
                            instr_done_touch.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *image_3* updates
        if image_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_3.frameNStart = frameN  # exact frame index
            image_3.tStart = t  # local t and not account for scr refresh
            image_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_3, 'tStartRefresh')  # time at next scr refresh
            image_3.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instructionsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "instructions"-------
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_2.addData('instr_done_button.started', instr_done_button.tStartRefresh)
    trials_2.addData('instr_done_button.stopped', instr_done_button.tStopRefresh)
    trials_2.addData('instr_done_label.started', instr_done_label.tStartRefresh)
    trials_2.addData('instr_done_label.stopped', instr_done_label.tStopRefresh)
    # store data for trials_2 (TrialHandler)
    x, y = instr_done_touch.getPos()
    buttons = instr_done_touch.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        try:
            iter(instr_done_button)
            clickableList = instr_done_button
        except:
            clickableList = [instr_done_button]
        for obj in clickableList:
            if obj.contains(instr_done_touch):
                gotValidClick = True
                instr_done_touch.clicked_name.append(obj.name)
    trials_2.addData('instr_done_touch.x', x)
    trials_2.addData('instr_done_touch.y', y)
    trials_2.addData('instr_done_touch.leftButton', buttons[0])
    trials_2.addData('instr_done_touch.midButton', buttons[1])
    trials_2.addData('instr_done_touch.rightButton', buttons[2])
    if len(instr_done_touch.clicked_name):
        trials_2.addData('instr_done_touch.clicked_name', instr_done_touch.clicked_name[0])
    trials_2.addData('instr_done_touch.started', instr_done_touch.tStart)
    trials_2.addData('instr_done_touch.stopped', instr_done_touch.tStop)
    trials_2.addData('image_3.started', image_3.tStartRefresh)
    trials_2.addData('image_3.stopped', image_3.tStopRefresh)
    # the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_2'


# set up handler to look after randomisation of conditions etc
blocks = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('blocks/blocks_order.xlsx'),
    seed=None, name='blocks')
thisExp.addLoop(blocks)  # add the loop to the experiment
thisBlock = blocks.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
if thisBlock != None:
    for paramName in thisBlock:
        exec('{} = thisBlock[paramName]'.format(paramName))

for thisBlock in blocks:
    currentLoop = blocks
    # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
    if thisBlock != None:
        for paramName in thisBlock:
            exec('{} = thisBlock[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "start_button"-------
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the start_press
    start_press.clicked_name = []
    gotValidClick = False  # until a click is received
    if progress>0:
        start_img.setImage("img/go.png")
    else:
        start_img.setImage("img/start.png")
    # keep track of which components have finished
    start_buttonComponents = [start_press, start_img]
    for thisComponent in start_buttonComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    start_buttonClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "start_button"-------
    while continueRoutine:
        # get current time
        t = start_buttonClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=start_buttonClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # *start_press* updates
        if start_press.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            start_press.frameNStart = frameN  # exact frame index
            start_press.tStart = t  # local t and not account for scr refresh
            start_press.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(start_press, 'tStartRefresh')  # time at next scr refresh
            start_press.status = STARTED
            start_press.mouseClock.reset()
            prevButtonState = start_press.getPressed()  # if button is down already this ISN'T a new click
        if start_press.status == STARTED:  # only update if started and not finished!
            buttons = start_press.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(start_img)
                        clickableList = start_img
                    except:
                        clickableList = [start_img]
                    for obj in clickableList:
                        if obj.contains(start_press):
                            gotValidClick = True
                            start_press.clicked_name.append(obj.name)
                    # abort routine on response
                    continueRoutine = False
        
        # *start_img* updates
        if start_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            start_img.frameNStart = frameN  # exact frame index
            start_img.tStart = t  # local t and not account for scr refresh
            start_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(start_img, 'tStartRefresh')  # time at next scr refresh
            start_img.setAutoDraw(True)
        countdown = round(1-t)
        if countdown==0 and progress>0:
            continueRoutine = False;
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in start_buttonComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "start_button"-------
    for thisComponent in start_buttonComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for blocks (TrialHandler)
    x, y = start_press.getPos()
    buttons = start_press.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        try:
            iter(start_img)
            clickableList = start_img
        except:
            clickableList = [start_img]
        for obj in clickableList:
            if obj.contains(start_press):
                gotValidClick = True
                start_press.clicked_name.append(obj.name)
    blocks.addData('start_press.x', x)
    blocks.addData('start_press.y', y)
    blocks.addData('start_press.leftButton', buttons[0])
    blocks.addData('start_press.midButton', buttons[1])
    blocks.addData('start_press.rightButton', buttons[2])
    if len(start_press.clicked_name):
        blocks.addData('start_press.clicked_name', start_press.clicked_name[0])
    blocks.addData('start_press.started', start_press.tStart)
    blocks.addData('start_press.stopped', start_press.tStop)
    blocks.addData('start_img.started', start_img.tStartRefresh)
    blocks.addData('start_img.stopped', start_img.tStopRefresh)
    # the Routine "start_button" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=1, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(condsFile),
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    for thisTrial in trials:
        currentLoop = trials
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                exec('{} = thisTrial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "fixation_2"-------
        continueRoutine = True
        routineTimer.add(1.000000)
        # update component parameters for each repeat
        # keep track of which components have finished
        fixation_2Components = [fixation_0]
        for thisComponent in fixation_2Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        fixation_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "fixation_2"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = fixation_2Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=fixation_2Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fixation_0* updates
            if fixation_0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fixation_0.frameNStart = frameN  # exact frame index
                fixation_0.tStart = t  # local t and not account for scr refresh
                fixation_0.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixation_0, 'tStartRefresh')  # time at next scr refresh
                fixation_0.setAutoDraw(True)
            if fixation_0.status == STARTED:
                # is it time to stop? (based on local clock)
                if tThisFlip > 1-frameTolerance:
                    # keep track of stop time/frame for later
                    fixation_0.tStop = t  # not accounting for scr refresh
                    fixation_0.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(fixation_0, 'tStopRefresh')  # time at next scr refresh
                    fixation_0.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in fixation_2Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "fixation_2"-------
        for thisComponent in fixation_2Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('fixation_0.started', fixation_0.tStartRefresh)
        trials.addData('fixation_0.stopped', fixation_0.tStopRefresh)
        
        # ------Prepare to start Routine "trial"-------
        continueRoutine = True
        # update component parameters for each repeat
        # setup some python lists for storing info about the touch_resp
        touch_resp.x = []
        touch_resp.y = []
        touch_resp.leftButton = []
        touch_resp.midButton = []
        touch_resp.rightButton = []
        touch_resp.time = []
        touch_resp.clicked_name = []
        gotValidClick = False  # until a click is received
        # set image
        solid.setImage('img/solid.png')
        empty.setImage('img/empty.png')
        
        # set size
        size = 0.3
        solid.setSize([size, size])
        empty.setSize([size, size])
        
        # set image location
        x = 0
        #solid_x = 0.5
        #x_diff = 0.1
        flip_flag = np.random.choice([-1,1],1)
        solid_y = np.random.normal(flip_flag * 0.25, 0.07)
        y_diff = np.random.normal(flip_flag * 0.05, 0.07)
        empty_y = solid_y - y_diff
        solid.setPos([x, solid_y])
        empty.setPos([x, empty_y])
        
        # show points
        #point0.setText('points: '+str(points))
        #point1.setText('points: '+str(points))
        #
        # keep track of which components have finished
        trialComponents = [touch_resp, solid, empty]
        for thisComponent in trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "trial"-------
        while continueRoutine:
            # get current time
            t = trialClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=trialClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # *touch_resp* updates
            if touch_resp.status == NOT_STARTED and t >= 0-frameTolerance:
                # keep track of start time/frame for later
                touch_resp.frameNStart = frameN  # exact frame index
                touch_resp.tStart = t  # local t and not account for scr refresh
                touch_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(touch_resp, 'tStartRefresh')  # time at next scr refresh
                touch_resp.status = STARTED
                touch_resp.mouseClock.reset()
                prevButtonState = touch_resp.getPressed()  # if button is down already this ISN'T a new click
            if touch_resp.status == STARTED:  # only update if started and not finished!
                buttons = touch_resp.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        try:
                            iter(solid,empty)
                            clickableList = solid,empty
                        except:
                            clickableList = [solid,empty]
                        for obj in clickableList:
                            if obj.contains(touch_resp):
                                gotValidClick = True
                                touch_resp.clicked_name.append(obj.name)
                        x, y = touch_resp.getPos()
                        touch_resp.x.append(x)
                        touch_resp.y.append(y)
                        buttons = touch_resp.getPressed()
                        touch_resp.leftButton.append(buttons[0])
                        touch_resp.midButton.append(buttons[1])
                        touch_resp.rightButton.append(buttons[2])
                        touch_resp.time.append(touch_resp.mouseClock.getTime())
                        # abort routine on response
                        continueRoutine = False
            mouse_down_detected = False
            mouse_click = touch_resp.getPressed()
            
            if mouse_click[0]: # button 0 is pressed
                if not mouse_down_detected: # initial detection
                    mouse_loc = touch_resp.getPos()
            #        mouse_click_locations.append(mouse_loc)
                    mouse_down_detected = True
            else:
                mouse_down_detected = False
                
            
            
            # *solid* updates
            if solid.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                solid.frameNStart = frameN  # exact frame index
                solid.tStart = t  # local t and not account for scr refresh
                solid.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(solid, 'tStartRefresh')  # time at next scr refresh
                solid.setAutoDraw(True)
            
            # *empty* updates
            if empty.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                empty.frameNStart = frameN  # exact frame index
                empty.tStart = t  # local t and not account for scr refresh
                empty.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(empty, 'tStartRefresh')  # time at next scr refresh
                empty.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "trial"-------
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store data for trials (TrialHandler)
        if len(touch_resp.x): trials.addData('touch_resp.x', touch_resp.x[0])
        if len(touch_resp.y): trials.addData('touch_resp.y', touch_resp.y[0])
        if len(touch_resp.leftButton): trials.addData('touch_resp.leftButton', touch_resp.leftButton[0])
        if len(touch_resp.midButton): trials.addData('touch_resp.midButton', touch_resp.midButton[0])
        if len(touch_resp.rightButton): trials.addData('touch_resp.rightButton', touch_resp.rightButton[0])
        if len(touch_resp.time): trials.addData('touch_resp.time', touch_resp.time[0])
        if len(touch_resp.clicked_name): trials.addData('touch_resp.clicked_name', touch_resp.clicked_name[0])
        trials.addData('touch_resp.started', touch_resp.tStart)
        trials.addData('touch_resp.stopped', touch_resp.tStop)
        trials.addData('solid.started', solid.tStartRefresh)
        trials.addData('solid.stopped', solid.tStopRefresh)
        trials.addData('empty.started', empty.tStartRefresh)
        trials.addData('empty.stopped', empty.tStopRefresh)
        # the Routine "trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "pop_2"-------
        continueRoutine = True
        routineTimer.add(1.000000)
        # update component parameters for each repeat
        # mouse loc split
        click_x, click_y = mouse_loc
        
        # check x location
        solid_in = False
        empty_in = False
        both_in = False
        hsize = size/2
        
        if abs(click_y-solid_y) <= hsize and abs(click_y-empty_y) <= hsize:
            solid_in = True
            empty_in = True
        elif abs(click_y-solid_y) <= hsize and abs(click_y-empty_y) > hsize:
            solid_in = True
        elif abs(click_y-solid_y) > hsize and abs(click_y-empty_y) <= hsize:
            empty_in = True
        
        # check if both in
        if solid_in==True and empty_in==True:
            both_in = True
            
        # make msg
        if solid_in==True and both_in==False:
            msg = 'Lose! \n-200'
            points -= 200
        elif empty_in==True and both_in==False:
            msg = 'Win! \n+100'
            points += 100
        elif both_in is True:
            msg = 'Lose! \n-200'
            points -= 200
        else:
            msg = 'None'
            points += 0
            
        # print msg
        text.setText(msg)
        
        # print points
        #point0.setText('points: '+str(points))
        #point1.setText('points: '+str(points))
        #point3.setText('points: '+str(points))
        
        # saving
        thisExp.addData('points', points)
        thisExp.addData('circle_solid', solid_in)
        thisExp.addData('circle_empty', empty_in)
        thisExp.addData('circle_both', both_in)
        thisExp.addData('solid_y', solid_y)
        thisExp.addData('click_y', click_y)
        thisExp.addData('empty_y', empty_y)
        thisExp.addData('hsize', hsize)
        # keep track of which components have finished
        pop_2Components = [text]
        for thisComponent in pop_2Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        pop_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "pop_2"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = pop_2Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=pop_2Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text* updates
            if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text.frameNStart = frameN  # exact frame index
                text.tStart = t  # local t and not account for scr refresh
                text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
                text.setAutoDraw(True)
            if text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    text.tStop = t  # not accounting for scr refresh
                    text.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text, 'tStopRefresh')  # time at next scr refresh
                    text.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in pop_2Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "pop_2"-------
        for thisComponent in pop_2Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('text.started', text.tStartRefresh)
        trials.addData('text.stopped', text.tStopRefresh)
        thisExp.nextEntry()
        
    # completed 1 repeats of 'trials'
    
    
    # ------Prepare to start Routine "block_score"-------
    continueRoutine = True
    routineTimer.add(9.000000)
    # update component parameters for each repeat
    ## set text
    #block_cash.setText(
    #'End of block, '+str(5-block_cnt)+' blocks left.'+
    ##'\nYou have earned '+str(points)+' points so far.\n'+
    #'\n'+
    #'\nTake a short break, press Start when you are ready.')
    #
    ## reset count
    #block_cnt += 1
    ##points = 0
    
    progress = progress + 25;
    progImg.setImage("img/p"+str(progress)+".png")
    if progress <100:
        txt_part = 'Well done! You are '+str(progress)+'% through! Keep going!'
        block_cash.setText(
        txt_part
        +'\n'+
        '\nYour current total is '+str(points)+' points.'+
        '\n'+
        '\nTake a short rest and get ready to play.')
    if progress==100:
        txt_part = 'Well done! You have finished the game. Please wait.'
        block_cash.setText(
        txt_part
        +'\n'+
        '\nYour total remaining is '+str(points)+' points.')
    # reset count
    #points = 0
    timer_text = ''
    # keep track of which components have finished
    block_scoreComponents = [text_timer, block_cash, progImg]
    for thisComponent in block_scoreComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    block_scoreClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "block_score"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = block_scoreClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=block_scoreClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_timer* updates
        if text_timer.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_timer.frameNStart = frameN  # exact frame index
            text_timer.tStart = t  # local t and not account for scr refresh
            text_timer.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_timer, 'tStartRefresh')  # time at next scr refresh
            text_timer.setAutoDraw(True)
        if text_timer.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_timer.tStartRefresh + 9-frameTolerance:
                # keep track of stop time/frame for later
                text_timer.tStop = t  # not accounting for scr refresh
                text_timer.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_timer, 'tStopRefresh')  # time at next scr refresh
                text_timer.setAutoDraw(False)
        if text_timer.status == STARTED:  # only update if drawing
            text_timer.setText(timer_text, log=False)
        
        # *block_cash* updates
        if block_cash.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            block_cash.frameNStart = frameN  # exact frame index
            block_cash.tStart = t  # local t and not account for scr refresh
            block_cash.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(block_cash, 'tStartRefresh')  # time at next scr refresh
            block_cash.setAutoDraw(True)
        if block_cash.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > block_cash.tStartRefresh + 9-frameTolerance:
                # keep track of stop time/frame for later
                block_cash.tStop = t  # not accounting for scr refresh
                block_cash.frameNStop = frameN  # exact frame index
                win.timeOnFlip(block_cash, 'tStopRefresh')  # time at next scr refresh
                block_cash.setAutoDraw(False)
        
        # *progImg* updates
        if progImg.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            progImg.frameNStart = frameN  # exact frame index
            progImg.tStart = t  # local t and not account for scr refresh
            progImg.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(progImg, 'tStartRefresh')  # time at next scr refresh
            progImg.setAutoDraw(True)
        if progImg.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > progImg.tStartRefresh + 9-frameTolerance:
                # keep track of stop time/frame for later
                progImg.tStop = t  # not accounting for scr refresh
                progImg.frameNStop = frameN  # exact frame index
                win.timeOnFlip(progImg, 'tStopRefresh')  # time at next scr refresh
                progImg.setAutoDraw(False)
        countdown = round(8.5-t)
        if countdown==0:
            if progress==100:
                timer_text=""
            else:
                timer_text="Go!"
        else:
            if progress==100:
                timer_text = "The game will end in: "+str(countdown) + ' seconds.'    
            else:
                timer_text="The task will start again in: "+str(countdown) + ' seconds.'    
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in block_scoreComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "block_score"-------
    for thisComponent in block_scoreComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    blocks.addData('text_timer.started', text_timer.tStartRefresh)
    blocks.addData('text_timer.stopped', text_timer.tStopRefresh)
    blocks.addData('block_cash.started', block_cash.tStartRefresh)
    blocks.addData('block_cash.stopped', block_cash.tStopRefresh)
    blocks.addData('progImg.started', progImg.tStartRefresh)
    blocks.addData('progImg.stopped', progImg.tStopRefresh)
# completed 1 repeats of 'blocks'


# ------Prepare to start Routine "final_score"-------
continueRoutine = True
routineTimer.add(5.000000)
# update component parameters for each repeat
score.setText('You have earned '+str(points)+' points!'+
'\nWell done!')
# keep track of which components have finished
final_scoreComponents = [score]
for thisComponent in final_scoreComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
final_scoreClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "final_score"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = final_scoreClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=final_scoreClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *score* updates
    if score.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        score.frameNStart = frameN  # exact frame index
        score.tStart = t  # local t and not account for scr refresh
        score.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(score, 'tStartRefresh')  # time at next scr refresh
        score.setAutoDraw(True)
    if score.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > score.tStartRefresh + 5-frameTolerance:
            # keep track of stop time/frame for later
            score.tStop = t  # not accounting for scr refresh
            score.frameNStop = frameN  # exact frame index
            win.timeOnFlip(score, 'tStopRefresh')  # time at next scr refresh
            score.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in final_scoreComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "final_score"-------
for thisComponent in final_scoreComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('score.started', score.tStartRefresh)
thisExp.addData('score.stopped', score.tStopRefresh)

# ------Prepare to start Routine "end_thanks"-------
continueRoutine = True
routineTimer.add(5.000000)
# update component parameters for each repeat
# keep track of which components have finished
end_thanksComponents = [thanks_text]
for thisComponent in end_thanksComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
end_thanksClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "end_thanks"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = end_thanksClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=end_thanksClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *thanks_text* updates
    if thanks_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        thanks_text.frameNStart = frameN  # exact frame index
        thanks_text.tStart = t  # local t and not account for scr refresh
        thanks_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(thanks_text, 'tStartRefresh')  # time at next scr refresh
        thanks_text.setAutoDraw(True)
    if thanks_text.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > thanks_text.tStartRefresh + 5-frameTolerance:
            # keep track of stop time/frame for later
            thanks_text.tStop = t  # not accounting for scr refresh
            thanks_text.frameNStop = frameN  # exact frame index
            win.timeOnFlip(thanks_text, 'tStopRefresh')  # time at next scr refresh
            thanks_text.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in end_thanksComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "end_thanks"-------
for thisComponent in end_thanksComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('thanks_text.started', thanks_text.tStartRefresh)
thisExp.addData('thanks_text.stopped', thanks_text.tStopRefresh)

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()

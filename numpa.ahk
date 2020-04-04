#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

Numpad1:: 
Send, #1 
Return
Numpad2:: 
Send, #2 
Return
Numpad3:: 
Send, #3 
Return
Numpad4:: 
Send, #4 
Return

NumpadDiv::
Send, ^{PgUp}
Return
NumpadMult::
Send, ^{PgDn}
Return
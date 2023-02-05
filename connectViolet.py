

import random
from tkinter import *
from tkinter import messagebox as mb
import json

q1 = 0
q2 = 0
q3 = 0
q4 = 0
q5 = 0
q6 = 0
q7 = 0
q8 = 0
q9 = 0
person = ''

class Quiz:
    def __init__(self):
        self.questionNumber = 0
        self.display_title()
        self.display_question()
        
        self.opt_selected = IntVar()
        
        self.opts = self.radioButtons()
        
        self.display_options()
        
        self.buttons()
        
        self.dataSize = len(10)
        
    def assignAns(self, q_no):
        answer = self.opt_selected.get()
        #NOT DONE
    
    def nextBtn(self):
        self.questonNumber += 1
        if self.questionNumber == self.dataSize:
            gui.destroy()
        else:
            self.display_question()
            self.display_options()
    
    def buttons(self):
        nextButton = Button(gui, text='Next', command = self.nextBtn,
            width = 10, bg = 'purple', fg = 'white', font = ('ariel', 16, 'bold'))
        
        nextButton.place(x=350, y=380)
        quitButton = Button(gui, 'Quit', command = gui.destroy, width = 5,
            bg = 'purple', fg = 'white', font = ('ariel', 16, 'bold'))
        
        quitButton.place(x=700,y=50)
        
    def display_options(self):
        value = 0
        
        self.opt_selected.set(0)
        
        for option in options[self.questionNumber]:
            self.opts[value]['text'] = option
            value+=1
            
    def display_question(self):
        questionNumber = Label(gui, text = question[self.questionNumber], width = 60, font = ('ariel', 16, 'bold' ), anchor = 'w')
        questionNumber.place(x=70, y= 100)
        
    def display_title(self):
        title = Label(gui, text='Women in STEM Personality Quiz', width = 50, bg = 'purple', fg = 'white', font = ('ariel' , 20, 'bold'))
        
        title.place(x=0, y=2)

    def radioButtons(self):
        qList = []
        yPos = 150
        
        while len(qList) <4:
            radioButton = Radiobutton(gui, text = ' ', variable = self.opt_selected, value = len(qList) +1, font = ('ariel', 14))
            
            qList.append(radioButton)
            radioButton.place (x = 100, y = yPos)
            yPos += 40
            
        return qList
    
    
    
    
class Results:
   
    #results = input("please input results")
    def readResults(self):
        # translate results into numbers
        global q1
        q1 = 0
        global q2
        q2 = 1
        global q3
        q3 = -1
        global q4
        q4 = -2
        global q5
        q5 = -1
        global q6
        q6 = 2
        global q7
        q7 = 1
        global q8
        q8 = -2
        global q9
        q9 = -2
        #print( q1, q2, q3, q4, q5, q6, q7, q8)
         
    def assignLetter(self, a1, a2, a3):
        pointSum = a1 + a2 + a3
        print('pointSum: ',pointSum)
        letter = ''
        if(pointSum < 0):
            letter = 'a'
        elif (pointSum > 0):
            letter = 'b'
        elif(pointSum == 0):
            randomInt = random.randrange(1,2)
            print('randomInt: ', randomInt)
            if(randomInt == 1):
                letter = 'a'
            elif(randomInt == 2):
                letter = 'b'
        return letter

    def assignPerson(self, c1, c2, c3):
        code = c1 + c2 + c3
        global person
        match code:
            case 'aaa':
                person = 'person1'
            case 'aab':
                person = 'person2'
            case 'aba':
                person = 'person3'
            case 'abb':
                person = 'person4'
            case 'baa':
                person = 'person5'
            case 'bab':
                person = 'person6'
            case 'bba':
                person = 'person7'
            case 'bbb':
                person = 'person8'
            case _:
                person = 'error'
            


gui = Tk()
gui.geometry('800x450')
gui.title('Women in STEM Personality Quiz')

question = 'question'
options = ['a', 'b', 'c', 'd']
answer = 'answer'

quiz = Quiz()

gui.mainLoop()



    
res = Results()

res.readResults()

IX = res.assignLetter(q1,q2,q3)
OF = res.assignLetter(q4,q5,q6)
LM = res.assignLetter(q7,q8,q9)

res.assignPerson(IX, OF, LM)
print('person: ' +person)

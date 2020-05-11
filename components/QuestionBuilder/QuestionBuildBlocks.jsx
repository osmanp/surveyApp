import { Container, Grid } from "@material-ui/core";
import _ from "lodash";
import React from "react";
import QuestionBuildForm from "../QuestionBuilder/QuestionBuildForm";
const uuid = require("uuid");

const QuestionBuildBlocks = ({ questions, handler }) => {

    const defaultQuestion = {
        id:uuid.v4(),
        type:'free-text',
        title:{
            text:"Untitled Question",
            description:""
        },
        body:{          
            variant:'short' 
        }
    };

    const initialBlocks = (questions && questions.length > 0) ? questions.map(q => {
        return {
            question: q,
            state: 'view'
        };
    }) : [];

    const [blocks, setBlocks] = React.useState(initialBlocks);
    const [activeTemplate, setActiveTemplate] = React.useState({});

    const handleQuestionUpdate = (question) => {    
       
        const newBlocks = _.cloneDeep(blocks);
        const index = newBlocks.findIndex(s => s.question.id == question.id);
        if (index < 0) {            
            setActiveTemplate(question);            
        }
        else {
            newBlocks[index] = { question: question, state: newBlocks[index].state };
            setBlocks(newBlocks);
            handler.updateQuestions(newBlocks.map(s => s.question));
        }
    };

    const handleQuestionActions = (event, senderID) => {
        switch (event) {
            case "Add":
                {
                    const newBlocks = Array.from(blocks);
                    const senderBlock = blocks.find(s => s.question.id == senderID);
                    const newQuestion = {
                        id: uuid.v4(),
                        type: "free-text",
                        number: senderBlock.question.number + 1,
                        title: {
                        },
                        body: {
                            rowCount: 2,
                        },
                    };
                    for (let i = 0; i < newBlocks.length; i++) {
                        if (newBlocks[i].question.number >= newQuestion.number) {
                            newBlocks[i].question.number++;
                        }
                    }
                    newBlocks.splice(senderBlock.question.number, 0, { question: newQuestion, state: 'edit' });
                    setBlocks(newBlocks);
                    setActiveTemplate(defaultQuestion);                    
                    handler.updateQuestions(newBlocks.map(s => s.question));
                }
                break;
            case "Copy":
                {
                    const newBlocks = Array.from(blocks);
                    const senderBlock = blocks.find(s => s.question.id == senderID);
                    const newQuestion = _.cloneDeep(senderBlock.question);
                    newQuestion.id = uuid.v4();
                    newQuestion.number = senderBlock.question.number + 1;

                    for (let i = 0; i < newBlocks.length; i++) {
                        if (newBlocks[i].question.number >= newQuestion.number) {
                            newBlocks[i].question.number++;
                        }
                    }
                    newBlocks.splice(senderBlock.question.number, 0, { question: newQuestion, state: 'edit' });

                    setBlocks(newBlocks);
                    handler.updateQuestions(newBlocks.map(s => s.question));
                }
                break;
            case "Delete": {
                const newBlocks = Array.from(blocks);
                const senderBlockIndex = blocks.findIndex(s => s.question.id == senderID);

                for (let i = 0; i < newBlocks.length; i++) {
                    if (newBlocks[i].question.number > newBlocks[senderBlockIndex].question.number) {
                        newBlocks[i].question.number--;
                    }
                }
                newBlocks.splice(senderBlockIndex, 1);
                setBlocks(newBlocks);
                handler.updateQuestions(newBlocks.map(s => s.question));
            } break;
            case "Edit": {
                const newBlocks = Array.from(blocks);
                const senderBlockIndex = blocks.findIndex(s => s.question.id == senderID);
                newBlocks[senderBlockIndex].state = 'edit';
                setBlocks(newBlocks);
                console.log(newBlocks);
            }
                break;
            case "Save": {
                const newBlocks = Array.from(blocks);
                const senderBlockIndex = blocks.findIndex(s => s.question.id == senderID);              
                if (senderBlockIndex < 0) {
                    activeTemplate.number = newBlocks.length + 1;
                    newBlocks.push({ question: activeTemplate, state: 'view' });
                    setActiveTemplate(defaultQuestion);                    
                }
                else {
                    newBlocks[senderBlockIndex].state = 'view';
                }
                
                setBlocks(newBlocks);
                handler.updateQuestions(newBlocks.map(s => s.question));
            }
                break;
            case "Clear": {
                setActiveTemplate(defaultQuestion);                    
            }
                break;
        }
    };
    const handleUpdateState = (viewState,senderID) => {
        const newBlocks = Array.from(blocks);
        const senderBlockIndex = newBlocks.findIndex(s => s.question.id == senderID);
        newBlocks[senderBlockIndex].state = viewState ? 'view' : 'edit';
        setBlocks(newBlocks);
    };
    const handlers = {
        updateQuestion: handleQuestionUpdate,
        handleActions: handleQuestionActions,
        updateState: handleUpdateState
    };


    return (
        <Container maxWidth="lg">
            <Grid
                container
                direction="column"
                alignItems="stretch"
                alignContent="stretch"
                justify="center"
                spacing={2}
            >
                <Grid item xs={12} container direction="column">
                    <Container maxWidth="lg">
                        {blocks.map((element) => {
                            return (
                                <QuestionBuildForm key={element.id} state={element.state} autoChange={false} question={element.question} handlers={handlers} >
                                </QuestionBuildForm>
                            );
                        })}
                    </Container>
                    <Grid item xs={12}>
                        <QuestionBuildForm state={'edit'} question={activeTemplate} autoChange={false} handlers={handlers} >
                        </QuestionBuildForm>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default QuestionBuildBlocks;

import { Grid, Grow } from '@material-ui/core';
import QuestionContainer from '../Question/QuestionContainer';
import QuestionForm from './QuestionForm';
import QuestionFormActions from './QuestionFormActions';

const getViewComponent = (handlers, question) => {
    const [hovering, setHovering] = React.useState(false);
    return (
        <div
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}   >
            <Grid container direction='row'>
                <Grid item xs={3}>
                    <Grid>
                        <Grow direction="up" in={hovering} mountOnEnter unmountOnExit>
                            <QuestionFormActions
                                eventHandler={handlers.handleActions}
                                senderID={question.id}
                                group={1}
                            ></QuestionFormActions>
                        </Grow >
                    </Grid>
                </Grid>
                <Grid item xs={9}>
                    <QuestionContainer question={question}></QuestionContainer>
                </Grid>
            </Grid>
            {/* {hovering ? (
                <Grid item xs={12}>
                    <QuestionFormActions
                        eventHandler={handlers.handleActions}
                        senderID={question.id}
                        group={1}
                    ></QuestionFormActions>
                </Grid>
            ) : null} */}
        </div>
    );
};
const getEditComponent = (handlers, question) => {
    const [hovering, setHovering] = React.useState(false);
    return (
        <div
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}   >
            <Grid container direction='row'>
                
                    <Grid item xs={3}>
                    <Grow direction="up" in={hovering} mountOnEnter unmountOnExit>
                        <QuestionFormActions
                            eventHandler={handlers.handleActions}
                            senderID={question.id}
                            group={2}
                        ></QuestionFormActions>
                         </Grow >
                    </Grid>
               
                <Grid item xs={9}>
                    <QuestionForm initialQuestionTemplate={question} handlers={handlers}></QuestionForm>
                </Grid>

                {/* {hovering ? (
                <Grid item xs={12}>
                    <QuestionFormActions
                        eventHandler={handlers.handleActions}
                        senderID={question.id}
                        group={2}
                    ></QuestionFormActions>
                </Grid>
            ) : null} */}
            </Grid>
        </div>
    );
};

const QuestionBuildForm = ({ state, question, handlers }) => {

    return (
        <>
            {
                state == 'view' ?
                    getViewComponent(handlers, question) : getEditComponent(handlers, question)
            }
        </>);
};

export default QuestionBuildForm;
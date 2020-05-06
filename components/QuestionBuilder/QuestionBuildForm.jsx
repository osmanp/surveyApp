import { Grid, Grow } from '@material-ui/core';
import QuestionContainer from '../Question/QuestionContainer';
import QuestionForm from './QuestionForm';
import QuestionFormActions from './QuestionFormActions';

const getViewComponent = (question) => {
    return <QuestionContainer question={question}></QuestionContainer>;
};
const getEditComponent = (handlers, question) => {
    return (
        <QuestionForm initialQuestionTemplate={question} handlers={handlers}></QuestionForm>
    );
};

const QuestionBuildForm = ({ state, question, autoChange, handlers }) => {
    const [hovering, setHovering] = React.useState(false);
    const [viewState, setViewState] = React.useState(state === 'view');
    React.useEffect(() => {
        setViewState(state == 'view');
    }, [state]);
    const handleMouseLeave = () => {        
        setHovering(false);
        if (autoChange && state == 'edit') {           
            setViewState(true);
            handlers.updateState(viewState, question.id);
        }
    };
    return (
        <>
            <div
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={handleMouseLeave}   >
                <Grid container direction='row'>
                    <Grid item xs={2} alignContent='flex-end' style={{ textAlign: 'right' }}>
                        <Grow direction="up" in={hovering} mountOnEnter unmountOnExit>
                            <QuestionFormActions
                                eventHandler={handlers.handleActions}
                                senderID={question.id}
                                group={viewState ? 1 : 2}
                            ></QuestionFormActions>
                        </Grow >
                    </Grid>
                    <Grid item xs={8}>
                        {
                            viewState ?
                                getViewComponent(question) : getEditComponent(handlers, question)
                        }
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </div>

        </>);
};

export default QuestionBuildForm;
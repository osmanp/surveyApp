import { Container } from "@material-ui/core";
import SurveyContainer from "../components/Survey/SurveyContainer";

export default class ViewSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyId:props.surveyId,
      survey:null,
      mounted:false
    }
  }

  componentDidMount() {
    console.log('mount');
    const cachedSurvey = JSON.parse(localStorage.getItem(this.state.surveyId));
    this.setState({
      survey: cachedSurvey,
      mounted:true
    });
  }

  render() {
    console.log(this.state.survey);
    return (
      <Container>
       {this.state.mounted ?   <SurveyContainer survey={this.state.survey}></SurveyContainer> : null}
      </Container>
    );
  }
}

export async function getServerSideProps(context) {
  const surveyId = context.query["id"];

  return {
    props: {
      surveyId: surveyId,
    }, // will be passed to the page component as props
  };
}

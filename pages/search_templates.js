import { Container, Typography, Grid } from "@material-ui/core";
import Layout from '../components/Layout';
import SurveyTemplatesFilter from "../components/SurveyTemplates/SurveyTemplatesFilter";
import TemplateCard from "../components/SurveyTemplates/TemplateCard";
import Surveys from '../data/survey';
import { Pagination } from "@material-ui/lab";

export default function SearchTemplates() {
    const surveyTemplates = [Surveys[0], Surveys[0], Surveys[0], Surveys[0]];
    return (
        <Layout>
            <Container style={{ marginTop: '40px' }}>
                <SurveyTemplatesFilter></SurveyTemplatesFilter>
                <Grid container direction='row' spacing={4}>
                    {surveyTemplates.map(element => {
                        return <Grid item xs key={element.id}>
                            <TemplateCard survey={element}></TemplateCard>
                        </Grid>;
                    })}
                </Grid>
                <Pagination
                    count={4} size="large" color='secondary' showFirstButton showLastButton variant="outlined"
                    style={{ marginTop: '20px' }} />
            </Container>
        </Layout>

    );
}
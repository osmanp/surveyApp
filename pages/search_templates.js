import { Box, Container, Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import SurveyFilter from "../components/Common/SurveyFilter";
import Layout from '../components/Layout';
import TemplateCard from "../components/SurveyTemplates/TemplateCard";
import Surveys from '../data/survey';

export default function SearchTemplates() {
    const surveyTemplates = [Surveys[0], Surveys[0], Surveys[0], Surveys[0]];
    const handler = {
        filter: (filterOptions) => {            
            console.log(filterOptions);
        }
    };
    return (
        <Layout>
            <Box style={{ marginTop: '60px' }}>
                <Grid container direction='row'>
                    <Grid item xs={2}>
                        <SurveyFilter options={{ showRatings: true }} handlers={handler}></SurveyFilter>
                    </Grid>
                    <Grid item container xs={10} direction='column' justify='flex-start' alignItems='stretch'>
                        <Grid item container direction='row' spacing={4}>
                            {surveyTemplates.map(element => {
                                return <Grid item xs key={element.id}>
                                    <TemplateCard survey={element}></TemplateCard>
                                </Grid>;
                            })}
                        </Grid>
                        <Grid item xs container direction='row' justify='center'>
                            <Grid item xs={4}>
                                <Pagination
                                    count={4} size="large" color='secondary' showFirstButton showLastButton variant="outlined"
                                    style={{ marginTop: '100px' }} />
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Layout>

    );
}
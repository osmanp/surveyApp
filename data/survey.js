const survey = [
  {
    attributes:{
      comments:200,
      rating:4.3,
      category:"Academic",
      createDate:"2019-21-20"
    },
    title: {
      text: "A survey example",
      estimatedTime:'30min',
      questionCount:9,
      description:"a medical research opinion poll for survivors"
    },
    body:{
        questions:[1,2,3,4,5,6,7,8,9],
        questionPerPage:3,        
        enableProgress:true
    }    
  },
];

export default survey;
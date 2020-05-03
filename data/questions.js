const Questions = [
  {
    id: 1,
    type: "free-text",
    number: "1",
    title: {
      text:
        "Would you like to interact with your supervisor more, less, or about the same amount as you currently interact with him/her?",
      explanation: "",
    },
    body: {
      rows: 10,
      helperText: "write less than 250 words",
    },
  },
  {
    id: 2,
    type: "select",
    number: "2",
    title: {
      text:
        "Did it take you more or less time than you expected to find what you were looking for on our website?",
      explanation: "Please select one",
    },
    body: {
      allowMultiple: false,
      options: [
        { label: "A lot less time", value: "1" },
        { label: "A little more time", value: "2" },
        { label: "A little less time", value: "3" },
        { label: "A lot more time", value: "4" },
        { label: "About what i expected", value: "5" },
      ],
    },
  },
  {
    id: 3,
    type: "select",
    number: "3",
    title: {
      text:
        "How improved is your performance after getting feedback from your supervisor about your work?",
    },
    body: {
      allowMultiple: true,
      options: [
        { label: "Extremely effective", value: "1" },
        { label: "Very effective", value: "2" },
        { label: "Somewhat effective", value: "3" },
        { label: "Not So Effective", value: "4" },
        { label: "Not at all effective", value: "5" },
      ],
    },
  },
  {
    id: 4,
    type: "slider",
    number: "4",
    title: {
      text: "How happy are you?",
    },
    body: {
      variant: "default",
      defaultValue: 5,
      min: 0,
      max: 10,
      step: 1,
      minLabel: "Not happy",
      maxLabel: "Very happy",
    },
  },
  {
    id: 5,
    type: "free-text",
    number: "5",
    title: {
      text: "Can you describe which product is better according to chart?",
      image: "/images/chart.jpg",
    },
    body: {
      rows: 10,
    },
  },
  {
    id: 6,
    type: "slider",
    number: "6",
    title: {
      text: "How happy are you?",
    },
    body: {
      variant: "grid",    
      defaultValue: 5,
      min: 0,
      max: 10,
      step: 1,
      minLabel: "Not happy",
      maxLabel: "Very happy",
    },
  },
  {
    id: 7,
    type: "select-multi",
    number: "7",
    title: {
      text: "",
    },
    body: {
      allowMultiple:true,
      columns: [
        { label: "Extremely effective", value: "1" },
        { label: "Very effective", value: "2" },
        { label: "Somewhat effective", value: "3" },
        { label: "Not So Effective", value: "4" },
        { label: "Not at all effective", value: "5" },
      ],
      rows:[
        { label: "Do you like working", id: "1" },
        { label: "Are you making surveys", id: "2" },
        { label: "How funny are you", id: "3" },
      ]
    }
  },
  {
    id: 7,
    type: "slider",
    number: "7",
    title: {
      text: "How happy are you?",
    },
    body: {
      variant: "rating",
      gridSlider: true,
      defaultValue: 5,
      min: 1,
      max: 10,
      step: 1,
      minLabel: "Not happy",
      maxLabel: "Very happy",
    },
  },
  {
    id: 8,
    type: "slider",
    number: "8",
    title: {
      text: "How happy are you?",
    },
    body: {
      variant: "radio",
      gridSlider: true,
      defaultValue: 5,
      min: 1,
      max: 5,
      step: 1,
      minLabel: "Not happy",
      maxLabel: "Very happy",
    },
  },
];

export default Questions;

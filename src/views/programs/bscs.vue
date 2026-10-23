
<template>
  <ProgramPage
    title="Computer Science"
    description="The Computer Science (CS) program is designed for students who want to study computing in depth, including programming, algorithms, software development, and computing technologies."
    :image="programImage"
    :objectives="objectives"
  />
</template>

<script>
import ProgramPage from "../../components/ProgramPage.vue";
import programImage from "../../assets/css.jpg";

export default {
  name: "BSCS",

  components: {
    ProgramPage
  },

  data() {
    return {
      programImage,

      objectives: [
        "Develop strong programming, analytical, and problem-solving skills.",
        "Design and develop software solutions using computing principles.",
        "Apply computer science concepts to real-world problems.",
        "Practice ethical and professional responsibilities in computing.",
        "Pursue lifelong learning and adapt to emerging technologies."
      ]
    };
  }
};
</script>

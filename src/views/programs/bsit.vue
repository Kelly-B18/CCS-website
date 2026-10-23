
<template>
  <ProgramPage
    title="Information Technology"
    description="The Information Technology (IT) program prepares students to apply technology in solving organizational and real-world problems through networking, web development, databases, and information systems."
    :image="programImage"
    :objectives="objectives"
  />
</template>

<script>
import ProgramPage from "../../components/ProgramPage.vue";
import programImage from "../../assets/itso.jpg";

export default {
  name: "BSIT",

  components: {
    ProgramPage
  },

  data() {
    return {
      programImage,

      objectives: [
        "Apply information technology concepts to solve practical problems.",
        "Develop and maintain web applications and information systems.",
        "Configure and manage computer networks and IT infrastructure.",
        "Demonstrate teamwork, communication, and professional ethics.",
        "Keep up with new technologies and industry developments."
      ]
    };
  }
};
</script>

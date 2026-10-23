
<template>
  <ProgramPage
    title="Digital Media and Interactive Arts"
    description="The Digital Media and Interactive Arts (DMIA) program develops students' creative and technical skills in digital design, multimedia production, animation, interactive content, and visual communication."
    :image="programImage"
    :objectives="objectives"
  />
</template>

<script>
import ProgramPage from "../../components/ProgramPage.vue";
import programImage from "../../assets/dmia.jpg";

export default {
  name: "DMIA",

  components: {
    ProgramPage
  },

  data() {
    return {
      programImage,

      objectives: [
        "Develop creative skills in digital design and multimedia production.",
        "Create engaging digital content and interactive experiences.",
        "Use appropriate tools for graphics, animation, and media development.",
        "Apply design principles and effective visual communication.",
        "Demonstrate creativity, collaboration, and professional responsibility."
      ]
    };
  }
};
</script>

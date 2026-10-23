
<template>
  <ProgramPage
    title="Library and Information Science"
    description="The Library and Information Science (LIS) program prepares students to organize, manage, preserve, and provide access to information resources in libraries and other information centers."
    :image="programImage"
    :objectives="objectives"
  />
</template>

<script>
import ProgramPage from "../../components/ProgramPage.vue";
import programImage from "../../assets/lisso.jpg";

export default {
  name: "BLIS",

  components: {
    ProgramPage
  },

  data() {
    return {
      programImage,

      objectives: [
        "Organize, catalog, and manage information resources effectively.",
        "Provide information services that meet users' needs.",
        "Use digital technologies to support library and information services.",
        "Promote ethical practices and responsible information management.",
        "Support lifelong learning, research, and access to information."
      ]
    };
  }
};
</script>

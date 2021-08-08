<template>
  <v-container fill-height>
    <v-row class="mt-12" justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="logo py-4 d-flex justify-center">
          <h1 class="display-1 primary--text">SurveyCup</h1>
        </v-card>
        <v-card>
          <v-card-title class="headline">
           <center class="text-center"> Welcome to the survey made easy for all</center>
          </v-card-title>
          <v-card-text>
            <p class="">
              SurveyCup is a web platform that collect data from specified set
              of peoples trough his targeted questions.
            </p>
            <p class="text-justify">
              Whether you’re doing medical research in a university, hospital,
              or small clinic, surveys can be critical to understanding the
              population you serve. Using surveys makes it easy to collect and
              analyze data for anything from basic research to clinical trials
              to epidemiological studies. Here are is the best practice
              to help medical researchers and healthcare workers use online
              healthcare surveys effectively.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              class="mb-2 px-5"
              x-large
              color="primary"
              nuxt
              to="/questions/"
            >
              Take a survey
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

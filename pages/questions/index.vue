<template>
  <v-container fill-height>
    <v-btn absolute left top fab to="/" class="mt-10"
      ><v-icon>mdi-arrow-left</v-icon></v-btn
    >
    <v-row class="mt-12" justify="center" align="center">
      <v-col cols="12" sm="8" md="7">
        <v-card class="py-4 d-flex justify-center">
          <h2 class="px-2">
            <span class="primary--text">
              Survey on Hospital Performance Evaluation</span
            >
          </h2>
        </v-card>
        <v-card>
          <v-card-title class="px-3 text-center headline"> </v-card-title>
          <v-card-text>
            <div>
              <p>
                1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                non culpa, architecto quisquam aspern:
              </p>
              <v-radio-group row v-model="answers">
                <v-radio
                  v-for="n in 3"
                  :key="n"
                  :label="`Lorem ipsum dolor sit amet consectetur adipisicing elit ${n}`"
                  :value="n"
                ></v-radio>
              </v-radio-group>
            </div>
            <div>
              <hr class="my-3" />

              <p>
                2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                non culpa, architecto quisquam aspern:
              </p>
              <v-radio-group row v-model="answers">
                <v-radio
                  v-for="n in 3"
                  :key="n"
                  :label="`Radio ${n}`"
                  :value="n"
                ></v-radio>
              </v-radio-group>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              class="mb-2 px-5"
              x-large
              color="primary"
              nuxt
              to="/questions/all"
            >
              Start
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: ()=>({
    questions:[],
    answers:[],
    nexts:[
      {}
    ]


  }),
  methods:{
    nextQuestion(){

    }
  }
}
</script>

<template>
  <div>
    <b-card>
      <div class="header-card">
        <b-icon class="h4 mb-2" icon="question-circle"></b-icon>
        <v-badge :content="1" color="green" overlap>
          <b-icon class="h4 mb-2" icon="bell-fill"></b-icon>
        </v-badge>
        <v-badge :content="3" color="red" overlap>
          <b-icon class="h4 mb-2" icon="envelope-fill"></b-icon>
        </v-badge>
        <b-card-text>Recruiter ID:1234</b-card-text>
      </div>
    </b-card>

    <b-container fluid style="background-color:white;">
      <h3 id="heading">Inbox</h3>
      <b-row>
        <b-col sm="9">
          <b-tabs content-class="mt-3">
            <b-tab title="Inbox" active>
              <div role="tablist">
                <b-card  v-for="email in emails" :key="email.id"  class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-card block v-b-toggle.accordion-1 variant="info">
                      <b-card-text>
                       <div class="email_header">
                         <b-icon  icon="star" variant="info"></b-icon>
                         <p>{{email.from}}</p>
                         <p>{{email.body}}</p>
                         <b-icon class="h4" icon="Paperclip" variant="info"></b-icon>
                         <p>{{email.time}}</p>
                       </div>
                      </b-card-text>
                    </b-card>
                  </b-card-header>
                  <b-collapse :id="email.accordion"  accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>{{ email.body }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </b-tab>
            <b-tab title="Promotions">
              <div role="tablist">
                <b-card  v-for="email in emails" :key="email.id"  class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-card block v-b-toggle.accordion-1 variant="info">
                      <b-card-text>
                        <div class="email_header">
                          <b-icon  icon="star" variant="info"></b-icon>
                          <p>{{email.from}}</p>
                          <p>{{email.body}}</p>
                          <b-icon class="h4" icon="Paperclip" variant="info"></b-icon>
                          <p>{{email.time}}</p>
                        </div>
                      </b-card-text>
                    </b-card>
                  </b-card-header>
                  <b-collapse :id="email.accordion"  accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>{{ email.body }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </b-tab>
          </b-tabs>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
    export default {
        data() {
            return {
              status: true,
              isOpen: 0,
              emails: [
                {
                  id:1,
                  favourite: true,
                  from: 'Eldora Studios',
                  subject: '5 Resume tips to help you secure your dream job',
                  accordion: 'accordion-1',
                  attachment: true,
                  time:'9:27 a.m.',
                  body: 'Hi Sir' +
                          'Attached are five tips to writing a good resume' +
                          'Regards,' +
                          'Eldora'
                },
   {
     id:2,

                 favourite: true,
                              from: 'Eldora Studios',
                 accordion: 'accordion-2',
                 subject: 'How to Approach new Users',
                  attachment: true,
                  time:'9:27 a.m.',
                  body: 'Hi Sir' +
                          'Attached are five tips to writing a good resume' +
                          'Regards,' +
                          'Eldora'
                },
   {
                  id:3,
                  favourite: true,
                  from: 'Michaal Angelo',
                  subject: 'Understanding the art of Recruitment',
                  attachment: true,
                  accordion: 'accordion-3',
                  time:'9:27 a.m.',
                  body: 'Hi Sir' +
                          'Attached are five tips to writing a good resume' +
                          'Regards,' +
                          'Eldora'
                },
   {
                  favourite: true,
                   id:4,
                  from: 'Heather Green',
                  subject: 'Find more candidates',
                  attachment: true,
                 accordion: 'accordion-4',
                 time:'8:03 a.m.',
                  body: 'Hi Sir' +
                          'Attached are five tips to writing a good resume' +
                          'Regards,' +
                          'Eldora'
                },
   {
                  favourite: true,
                   id:5,
                   from: 'Gibson May',
                  subject: 'Welcome to the team!',
                  attachment: true,
                   accordion: 'accordion-5',
                   time:'11:20 a.m.',
                  body: 'Hi Sir' +
                          'Attached are five tips to writing a good resume' +
                          'Regards,' +
                          'Eldora'
                },
   {
                  favourite: true,
                   id:6,
                   from: 'Michael Reed',
                  subject: 'Final award call!',
                  attachment: true,
                   accordion: 'accordion-6',
                   time:'10:30 a.m.',
                  body: 'Hi Sir' +
                          'Attached are five tips to writing a good resume' +
                          'Regards,' +
                          'Eldora'
                },

              ],
              collapses: [
                {
                  title: 'Title 1',
                  text: 'Text 1'
                },
                {
                  title: 'Title 2',
                  text: 'Text 2'
                },
                {
                  title: 'Title 3',
                  text: 'Text 3'
                }
              ]

                // Note `isActive` is left out and will not appear in the rendered table
            };
        },
    };
</script>

<style scoped>
  .email_header {
    display: flex;
    justify-content: space-between;

  }
    .header-card {
        display: flex;
        float: right;
        font-size: 16px;
        font-weight: bold;
    }
    
    .header-card>* {
        margin-left: 20px;
    }
    
    #heading {
        text-align: left;
        padding-top: 15px;
        padding-left: 5px;
    }
</style>

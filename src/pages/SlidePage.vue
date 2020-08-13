<template>
  <div class="container-fluid p-0 justify-content-center d-flex">
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center text-center" id="keynotes">
      <div class="w-100">
        <h2 class="mb-5"> {{this.$t('keynotes.title')}}</h2>
        <table class="table text-left">
            <thead>
                <th>{{this.$t('keynotes.col_year')}}</th>
                <th>{{this.$t('keynotes.col_title')}}</th>
                <th>PDF</th>
            </thead>
            <tbody>
                <tr v-for="slide in slides" :key="slide.id">
                    <td>{{slide.year}}</td>
                    <td> {{slide.name}}</td>
                    <td><b-button @click="openPDFDialog(`${slide.name}`, `${slide.url}`)">
                        Show Slide
                        </b-button></td>
                </tr>
            </tbody>
        </table>
        <!-- DIALOG -->
        <b-modal id="pdfDialog" :title="modal_name" ref="PDFDialog">
          <embed :src="modal_url" type="application/pdf" width="100%" height="600px">
        </b-modal>
        <legend>{{$t('keynotes.disclaimer_txt')}}</legend>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  metaInfo() {
    return {
      title: this.$t('keynotes.meta_title'),
      meta: [{
        vmid: 'description',
        name: 'description',
        content: this.$t('keynotes.meta_desc'),
      }],
    };
  },
  data() {
    return {
      modal_name: '',
      modal_url: '',
      slides: [
        {
          name: 'DevFest Kota Kinabalu - Polymer into Mobile App',
          url: '../pdfs/Devfest_KK _Polymer_Packaging_Web_App_into_Mobile_Apps.pdf',
          year: 2015,
        },
        {
          name: 'Malaysia Open Source Conference - Firebase Authentication',
          url: '../pdfs/Firebase_ A New_Future_for_Tackling_Back-End_Authentication.pdf',
          year: 2016,
        },
        {
          name: 'KualaLumpurJS - Introduction to Progressive Web App (PWA)',
          url: '../pdfs/KLJS_Introduction_to_PWA.pdf',
          year: 2017,
        },
        {
          name: 'Malaysia Open Source Conference - Payment Request API',
          url: '../pdfs/Payment_Request_API_MOSC.pdf',
          year: 2017,
        },
      ],
    };
  },
  methods: {
    openPDFDialog(name, url) {
      this.$refs.PDFDialog.show();
      this.modal_name = name;
      this.modal_url = url;
    },
  },
};
</script>
<style>
@media (min-width: 992px) {
    #pdfDialog .modal-dialog{
        width: 100%;
        min-width: 900px;
    }
}
legend{
  font-size: .8rem;
}
</style>

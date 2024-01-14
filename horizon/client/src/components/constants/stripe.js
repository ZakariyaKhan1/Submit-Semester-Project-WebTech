const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_51NQb3gLSeqmFeBs1NkjPGTMGJNk883hhRtQE4uoOti2wZTFoqLSSb3PKnSRXlHuqQMD5sCz1EABMMgysoCsX3Fkq006Ffaxb06'
  : 'pk_test_51NQb3gLSeqmFeBs1NkjPGTMGJNk883hhRtQE4uoOti2wZTFoqLSSb3PKnSRXlHuqQMD5sCz1EABMMgysoCsX3Fkq006Ffaxb06';

export default STRIPE_PUBLISHABLE;
function calculate(){

    //Calculating General Anxiety Disorder
    var ga1 = parseInt(document.getElementById('ga-1').value);
    var ga2 = parseInt(document.getElementById('ga-2').value);
    var ga3 = parseInt(document.getElementById('ga-3').value);
    var ga4 = parseInt(document.getElementById('ga-4').value);
    var ga5 = parseInt(document.getElementById('ga-5').value);
    var ga6 = parseInt(document.getElementById('ga-6').value);
    var ga7 = parseInt(document.getElementById('ga-7').value);
    var ga8 = parseInt(document.getElementById('ga-8').value);
    var ga9 = parseInt(document.getElementById('ga-9').value);

    var gasum = ga1+ga2+ga3+ga4+ga5+ga6+ga7+ga8+ga9;

    if(gasum <=5){
        var garesult = 'Normal';
    }else if(gasum <= 11){
        var garesult = 'Mild';
    }else if(gasum <=18){
        var garesult = 'Average';
    }else{
        garesult = 'Severe'
    }

    //Calculating Social Disorder
    var sd1 = parseInt(document.getElementById('sd-1').value);
    var sd2 = parseInt(document.getElementById('sd-2').value);
    var sd3 = parseInt(document.getElementById('sd-3').value);
    var sd4 = parseInt(document.getElementById('sd-4').value);
    var sd5 = parseInt(document.getElementById('sd-5').value);
    var sd6 = parseInt(document.getElementById('sd-6').value);
    var sd7 = parseInt(document.getElementById('sd-7').value);

    var sdsum = sd1+sd2+sd3+sd4+sd5+sd6+sd7;

    if(sdsum <=5){
        var sdresult = 'Normal';
    }else if(sdsum <= 11){
        var sdresult = 'Mild';
    }else if(sdsum <=18){
        var sdresult = 'Average';
    }else{
        sdresult = 'Severe'
    }

    //Calculating OCD Questions
    var ocd1 = parseInt(document.getElementById('ocd-1').value);
    var ocd2 = parseInt(document.getElementById('ocd-2').value);
    var ocd3 = parseInt(document.getElementById('ocd-3').value);
    var ocd4 = parseInt(document.getElementById('ocd-4').value);
    var ocd5 = parseInt(document.getElementById('ocd-5').value);
    var ocd6 = parseInt(document.getElementById('ocd-6').value);
    var ocd7 = parseInt(document.getElementById('ocd-7').value);
    var ocd8 = parseInt(document.getElementById('ocd-8').value);
    var ocd9 = parseInt(document.getElementById('ocd-9').value);

    var ocdsum = ocd1+ocd2+ocd3+ocd4+ocd5+ocd6+ocd7+ocd8+ocd9;

    if(ocdsum <=5){
        var ocdresult = 'Normal';
    }else if(ocdsum <= 11){
        var ocdresult = 'Mild';
    }else if(ocdsum <=18){
        var ocdresult = 'Average';
    }else{
        ocdresult = 'Severe'
    }

    //Calculating for PTSD
    var ptsd1 = parseInt(document.getElementById('ptsd-1').value);
    var ptsd2 = parseInt(document.getElementById('ptsd-2').value);
    var ptsd3 = parseInt(document.getElementById('ptsd-3').value);
    var ptsd4 = parseInt(document.getElementById('ptsd-4').value);
    var ptsd5 = parseInt(document.getElementById('ptsd-5').value);
    var ptsd6 = parseInt(document.getElementById('ptsd-6').value);
    var ptsd7 = parseInt(document.getElementById('ptsd-7').value);
    var ptsd8 = parseInt(document.getElementById('ptsd-8').value);
    var ptsd9 = parseInt(document.getElementById('ptsd-9').value);
    var ptsd10 = parseInt(document.getElementById('ptsd-10').value);
    var ptsd11 = parseInt(document.getElementById('ptsd-11').value);
    var ptsd12 = parseInt(document.getElementById('ptsd-12').value);
    var ptsd13 = parseInt(document.getElementById('ptsd-13').value);
    var ptsd14 = parseInt(document.getElementById('ptsd-14').value);
    var ptsd15 = parseInt(document.getElementById('ptsd-15').value);

    var ptsdsum = ptsd1+ptsd2+ptsd3+ptsd4+ptsd5+ptsd6+ptsd7+ptsd8+ptsd9+ptsd10+ptsd11+ptsd12+ptsd13+ptsd14+ptsd15;

    if(ptsdsum <=5){
        var ptsdresult = 'Normal';
    }else if(ptsdsum <= 11){
        var ptsdresult = 'Mild';
    }else if(ptsdsum <=18){
        var ptsdresult = 'Average';
    }else{
        ptsdresult = 'Severe'
    }

    //Calculating for Depression
    var d1 = parseInt(document.getElementById('d-1').value);
    var d2 = parseInt(document.getElementById('d-2').value);
    var d3 = parseInt(document.getElementById('d-3').value);
    var d4 = parseInt(document.getElementById('d-4').value);
    var d5 = parseInt(document.getElementById('d-5').value);
    var d6 = parseInt(document.getElementById('d-6').value);
    var d7 = parseInt(document.getElementById('d-7').value);
    var d8 = parseInt(document.getElementById('d-8').value);
    var d9 = parseInt(document.getElementById('d-9').value);
    var d10 = parseInt(document.getElementById('d-10').value);
    var d11 = parseInt(document.getElementById('d-11').value);
    var d12 = parseInt(document.getElementById('d-12').value);
    var d13 = parseInt(document.getElementById('d-13').value);
    var d14 = parseInt(document.getElementById('d-14').value);
    var d15 = parseInt(document.getElementById('d-15').value);

    var dsum = d1+d2+d3+d4+d5+d6+d7+d8+d9+d10+d11+d12+d13+d14+d15;

    if(dsum <=5){
        var dresult = 'Normal';
    }else if(dsum <= 11){
        var dresult = 'Mild';
    }else if(dsum <=18){
        var dresult = 'Average';
    }else{
        dresult = 'Severe'
    }

    //Normal all through
    if(garesult == 'Normal' && sdresult == 'Normal' && ocdresult == 'Normal' && ptsdresult == 'Normal' && dresult == 'Normal'){
        var output = 'You have a balanced mental health, Keep it up';
        var advice = "Don't forget to stay positive";
    }

    //Mild Social Disorder
    if(garesult == 'Normal' && sdresult == 'Mild' && ocdresult == 'Normal' && ptsdresult == 'Normal' && dresult == 'Normal'){
        var output = 'You have a mild social disorder';
        var advice = "Try talking in small group of familia faces and trying going out with friends more";
    }

    //Mild Anxiety
    if(garesult == 'Mild' && sdresult == 'Normal' && ocdresult == 'Normal' && ptsdresult == 'Normal' && dresult == 'Normal'){
        var output = 'You have mild anxiety';
        var advice = "";
    }

    //Mild OCD
    if(garesult == 'Normal' && sdresult == 'Normal' && ocdresult == 'Mild' && ptsdresult == 'Normal' && dresult == 'Normal'){
        var output = 'You have mild OCD';
        var advice = '';
    }

    //Mild PTSD
    if(garesult == 'Normal' && sdresult == 'Normal' && ocdresult == 'Normal' && ptsdresult == 'Mild' && dresult == 'Normal'){
        var output = 'You have mild PTSD';
        var advice = '';
    }

    //Mild Depression
    if(garesult == 'Normal' && sdresult == 'Normal' && ocdresult == 'Mild' && ptsdresult == 'Normal' && dresult == 'Mild'){
        var output = 'You have mild depression';
        var advice = '';
    }

    //All mild
    if(garesult == 'Mild' && sdresult == 'Mild' && ocdresult == 'Mild' && ptsdresult == 'Mild' && dresult == 'Mild'){
        var output = "You have a mild mental health";
        var advice = "";
    }

    //All average
    if(garesult == 'Average' && sdresult == 'Average' && ocdresult == 'Average' && ptsdresult == 'Average' && dresult == 'Average'){
        var output = "Your mental health is on average";
        var advice = "";
    }

    //All severe
    if(garesult == 'Severe' && sdresult == 'Severe' && ocdresult == 'Severe' && ptsdresult == 'Severe' && dresult == 'Severe'){
        var output = "You have severe anxiety and severe depression";
        var advice = "See a doctor immediately";
    }

    //Severe Anxiety
    if(garesult == 'Severe' && sdresult == 'Normal' && ocdresult == 'Normal' && ptsdresult == 'Normal' && dresult == 'Normal'){
        var output = "You have severe anxiety";
        var advice = "";
    }

    //Severe Social Disorder
    if(garesult == 'Normal' && sdresult == 'Severe' && ocdresult == 'Normal' && ptsdresult == 'Normal' && dresult == 'Normal'){
        var output = "You have severe Social Disorder";
        var advice = "";
    }
    
    //Severe OCD
    if(garesult == 'Normal' && sdresult == 'Normal' && ocdresult == 'Severe' && ptsdresult == 'Normal' && dresult == 'Normal'){
        var output = "You have severe OCD";
        var advice = "";
    }

    //Sever PTSD
    if(garesult == 'Normal' && sdresult == 'Nomral' && ocdresult == 'Normal' && ptsdresult == 'Severe' && dresult == 'Normal'){
        var output = "You have severe PTSD";
        var advice = "";
    }

    //Severe Depression
    if(garesult == 'Normal' && sdresult == 'Normal' && ocdresult == 'Normal' && ptsdresult == 'Normal' && dresult == 'Severe'){
        var output = "You have severe depression";
        var advice = "";
    }

    //Average general disorder
    if(garesult == 'Average' && sdresult == 'Normal' && ocdresult == 'Normal' && ptsdresult == 'Normal' && dresult == 'Normal'){
        var output = "You have average general disorder";
        var advice = "";
    }

    //Average Social Disorder
    if(garesult == 'Normal' && sdresult == 'Average' && ocdresult == 'Normal' && ptsdresult == 'Normal' && dresult == 'Normal'){
        var output = "You have average social disorder";
        var advice = "";
    }

    //Average OCD
    if(garesult == 'Normal' && sdresult == 'Normal' && ocdresult == 'Average' && ptsdresult == 'Normal' && dresult == 'Normal'){
        var output = "You have averga OCD";
        var advice = "";
    }

    //Average PTSD
    if(garesult == 'Normal' && sdresult == 'Normal' && ocdresult == 'Normal' && ptsdresult == 'Average' && dresult == 'Normal'){
        var output = "You have average PTSD";
        var advice = "";
    }

    //Average Depression
    if(garesult == 'Normal' && sdresult == 'Normal' && ocdresult == 'Normal' && ptsdresult == 'Normal' && dresult == 'Average'){
        var output = "You have average depression";
        var advice = "";
    }

    //
    if(garesult == 'Average' && sdresult == 'Average' && ocdresult == 'Mild' && ptsdresult == 'Mild' && dresult == 'Mild'){
        var output = "You have average general anxiety and average social disorder";
        var advice = "";
    }

    //
    if(garesult == 'Average' && sdresult == 'Mild' && ocdresult == 'Average' && ptsdresult == 'Mild' && dresult == 'Mild'){
        var output = "You have average general anxiety and average OCD";
        var advice = "";
    }

    //
    if(garesult == 'Average' && sdresult == 'Average' && ocdresult == 'Average' && ptsdresult == 'Average' && dresult == 'Mild'){
        var output = "You have average general anxiety, social disorder, OCD and PTSD";
        var advice = "";
    }

    if(garesult == 'Mild' && sdresult == 'Average' && ocdresult == 'Average' && ptsdresult == 'Average' && dresult == 'Average'){
        var output = "You have average social disorder, OCD, PTSD and depression";
        var advice = "";
    }else{
        output = "Combined illness";
    }

    alert(output);
}
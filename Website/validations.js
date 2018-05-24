function validate(man, mod){

    //return error if manufacturer not selected
    if (man === '') {
        return 'Please select a manufacturer';
    }

    //return error if manufacturer not valid
    if (!manufacturerList.includes(man)) {
        return 'No data found';
    }

    //if model not empty, check if model belongs to manufacturer
    if (mod !== '') {
        //return error if model is not valid for manufacturer
        if (!models.includes(mod)) {

            return "Specified model doesn't exist in the selected manufacturer";
        }
    }

}
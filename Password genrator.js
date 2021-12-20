const numbers = [1,2,3,4,5,6,7,8,9,0];
const symbol = ["@","#","$","%","&"];


const characterCodes = Array.from(Array(26)).map((_,i)=> i + 97);

const LowercaseLetters = characterCodes.map(code =>String.fromCharCode(code));
const uppercaseLetters = LowercaseLetters.map(letter =>letter.toUpperCase());

const generatePassword = (length, hasNumbers, hasSymbol, hasLowercase, hasUppercase)=>

// const LowercaseLetters = characterCodes.map(code=> fromCharcode(code));
    {
       const  availableCharacters = [

        ...(hasSymbol ? symbol :[]),
        ...(hasSymbol ? numbers :[]),
        ...(hasSymbol ? uppercaseLetters:[]),
        ...(hasSymbol ? LowercaseLetters :[]),

       ];

      //  console.log(availableCharacters);

       let password =" ";

       if(availableCharacters.length == 0)return" ";

       for(let i=0;i<length;i++)
       {
          const randomIndex =Math.floor(Math.random() * availableCharacters.length);
          password += availableCharacters[randomIndex];
       }

       return password;
    }
    console.log(  );
    console.log(  );
    console.log(  );


    console.log("Your New Password Is --->>");

    console.log(  );
    console.log(generatePassword(12,true,true,false,false));
    //1.symbol->ture
    //2.special charecter-->true
    //3.lowercase-->false
    //4.uppercase-->false
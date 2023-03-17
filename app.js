function find() {
    const capitalbase = document.getElementById('input1').value;
    const tipo = document.getElementById('input2').value;
    const negocio = document.getElementById('input3').value;
    const price = document.getElementById('premio');
  
    const precos = {
      comercio: {
        essencial: {
          100000: '40,69',
          200000: '57,18',
          300000: '83,64',
          400000: '110,10',
          500000: '136,57',
          600000: '155,40',
          700000: '174,24',
          800000: '193,06',
          900000: '211,90',
          1000000: '230,73',
        },
        completo: {
          100000: '54,51',
          200000: '77,21',
          300000: '113,67',
          400000: '150,14',
          500000: '186,60',
          600000: '215,46',
          700000: '244,30',
          800000: '273,13',
          900000: '301,98',
          1000000: '330,80',
        },
      },
      serviços: {
        essencial: {
          100000: '27,65',
          200000: '35,84',
          300000: '51,86',
          400000: '67,86',
          500000: '83,89',
          600000: '94,32',
          700000: '104,75',
          800000: '115,18',
          900000: '125,61',
          1000000: '136,03',
        },
        completo: {
          100000: '41,45',
          200000: '59,16',
          300000: '88,74',
          400000: '118,32',
          500000: '147,89',
          600000: '177,47',
          700000: '207,05',
          800000: '236,63',
          900000: '266,21',
          1000000: '295,78',
        },
      },
    };
  
    const preco = precos[negocio][tipo][capitalbase];
  
    if (preco) {
      price.innerText = 'R$ ' + preco;
    } else {
      price.innerText = '';
    }
  }
  
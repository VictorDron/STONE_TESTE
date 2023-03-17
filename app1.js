function find() {
    const capitalbase = document.getElementById('input1').value;
    const tipo = document.getElementById('input2').value;
    const negocio = document.getElementById('input3').value;
    const price = document.getElementById('premio');
  
    const precos = {
      comercio: {
        essencial: {
          100000: '44,75',
          200000: '63,00',
          300000: '91,99',
          400000: '120,99',
          500000: '149,98',
          600000: '170,94',
          700000: '191,91',
          800000: '212,87',
          900000: '233,84',
          1000000: '254,80',
        },
        completo: {
          100000: '60,11',
          200000: '84,93',
          300000: '125,03',
          400000: '165,13',
          500000: '205,23',
          600000: '236,01',
          700000: '266,79',
          800000: '297,56',
          900000: '328,34',
          1000000: '359,12',
        },
      },
      serviços: {
        essencial: {
          100000: '30,42',
          200000: '39,42',
          300000: '57,05',
          400000: '74,65',
          500000: '92,27',
          600000: '103,75',
          700000: '115,23',
          800000: '126,71',
          900000: '138,19',
          1000000: '149,67',
        },
        completo: {
          100000: '45,60',
          200000: '65,08',
          300000: '97,62',
          400000: '130,17',
          500000: '162,71',
          600000: '195,25',
          700000: '227,79',
          800000: '260,33',
          900000: '292,87',
          1000000: '325,41',
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
  
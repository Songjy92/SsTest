var hw = document.getElementById('pdfmake');
hw.addEventListener('click', function(){
    
    pdfMake.fonts = {
        yourFontName: {
        
          normal: 'NanumBarunGothicWeb.ttf',
          bold: 'NanumBarunGothicWeb.ttf',
          italics: 'NanumBarunGothicWeb.ttf',
          bolditalics: 'NanumBarunGothicWeb.ttf'
        }
    }
    

    var docDefinition = {
        
        content: [
            { text: '공 사 감 리 일 지',fontSize: 16, bold: true, alignment: "center"},
            {
                style: 'tableExample',
                table:{
                    widths:['*', '*'],
                    heights:25,
                    body:[
                        [
                            {
							border: [false, true, false, false],
							text: '일련번호'
						},
						{
							border: [false, true, false, false],
							text: ''
                        }
                    ],
                        [
                            
                            {
                                border: [false, true, false, false],
                                text: '총괄감리책임자'
                            },
                            {
                                border: [false, true, false, false],
                                text: '건축사보'
                            }
                        ],
                        [
                            {
                                border: [false, true, false, true],
                                text: '공사명: Sella 2 플랜트'
                            },
                            {
                                border: [false, true, false, true],
                                text: '2021년 00월 00일 ( 요일) 날씨:    '
                            }
                        ],
                    ]
                        

                },
            },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    widths:['*', '*','*'],
                    heights:[30,300],
                    body: [
                        [{ text: '공종 및 세부 공정', style: 'tableHeader' }, { text: '감리 항목', style: 'tableHeader' }, { text: '감리 내용', style: 'tableHeader' }],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ]
                },
            },
            {
                style: 'tableExample',
                table:{
                    widths:['*'],
                    heights:100,
                    body:[
                        [
                            {
							border: [false, true, false, false],
							text: '특기사항 \n'
						}
                    ],
                        [
                            
                            {
                                border: [false, true, false, true],
                                text: '지적사항 및 처리결과 \n'
                            }
                        ],
                    ]
                        

                },
            },
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10]
            },
            subheader: {
                fontSize: 16,
                bold: true,
                margin: [0, 10, 0, 5]
            },
            tableExample: {
                margin: [0, 5, 0, 15]
            },
            tableOpacityExample: {
                margin: [0, 5, 0, 15],
                fillColor: 'blue',
                fillOpacity: 0.3
            },
            tableHeader: {
                bold: true,
                fontSize: 13,
                color: 'black'
            }
        },
        defaultStyle:{
            font: 'yourFontName'
        }
    };
    pdfMake.createPdf(docDefinition).open();
})

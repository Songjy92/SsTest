var hw = document.getElementById('pdfmake');
hw.addEventListener('click', function(){
    pdfMake.fonts = {
        yourFontName: {
          normal: 'https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf',
          bold: 'https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.ttf',
          italics: 'https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf',
          bolditalics: 'https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf'
        }
    }

    var docDefinition = {
        
        content: [
            { text: '공 사 감 리 일 지',fontSize: 20, bold: true, alignment: "center"},
            { text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8] },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ]
                },
                layout: 'lightHorizontalLines'
            },
            { text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8] },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ]
                },
                layout: {
                    hLineWidth: function (i, node) {
                        return (i === 0 || i === node.table.body.length) ? 2 : 1;
                    },
                    vLineWidth: function (i, node) {
                        return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                    },
                    hLineColor: function (i, node) {
                        return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                    },
                    vLineColor: function (i, node) {
                        return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                    },
                    // hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
                    // vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
                    // paddingLeft: function(i, node) { return 4; },
                    // paddingRight: function(i, node) { return 4; },
                    // paddingTop: function(i, node) { return 2; },
                    // paddingBottom: function(i, node) { return 2; },
                    // fillColor: function (rowIndex, node, columnIndex) { return null; }
                }
            },
            { text: 'zebra style', margin: [0, 20, 0, 8] },
            {
                style: 'tableExample',
                table: {
                    body: [
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ]
                },
                layout: {
                    fillColor: function (rowIndex, node, columnIndex) {
                        return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
                    }
                }
            },
            { text: 'handling fill color opacity...', margin: [0, 20, 0, 8] },
            { text: '... just hardcoding values in the second row', margin: [0, 20, 0, 8] },
            {
                style: 'tableExample',
                table: {
                    body: [
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        [
                            {text: 'Sample value 1',fillOpacity:0.15,fillColor:'blue'},
                            {text: 'Sample value 2',fillOpacity:0.60,fillColor:'blue'},
                            {text: 'Sample value 3',fillOpacity:0.85,fillColor:'blue'},
                        ],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3']
                    ]
                },
            },	
            { text: '... using a custom styler and overriding it in the second row', margin: [0, 20, 0, 8] },
            {
                style: 'tableOpacityExample',
                table: {
                    body: [
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        [
                            {text: 'Sample value 1',fillOpacity:0.15},
                            {text: 'Sample value 2',fillOpacity:0.60},
                            {text: 'Sample value 3',fillOpacity:0.85},
                        ],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3']
                    ]
                },
            },
            { text: '... with a function (opacity at 0 means fully transparent, i.e no color)', margin: [0, 20, 0, 8] },
            {
                style: 'tableExample',
                table: {
                    body: [
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ]
                },
                layout: {
                    fillColor: 'blue',
                    fillOpacity: function (rowIndex, node, columnIndex) {
                        return (rowIndex/8+columnIndex/3);
                    }
                }
            },
            { text: 'and can be used dash border', margin: [0, 20, 0, 8] },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ]
                },
                layout: {
                    hLineWidth: function (i, node) {
                        return (i === 0 || i === node.table.body.length) ? 2 : 1;
                    },
                    vLineWidth: function (i, node) {
                        return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                    },
                    hLineColor: function (i, node) {
                        return 'black';
                    },
                    vLineColor: function (i, node) {
                        return 'black';
                    },
                    hLineStyle: function (i, node) {
                        if (i === 0 || i === node.table.body.length) {
                            return null;
                        }
                        return { dash: { length: 10, space: 4 } };
                    },
                    vLineStyle: function (i, node) {
                        if (i === 0 || i === node.table.widths.length) {
                            return null;
                        }
                        return { dash: { length: 4 } };
                    },
                    // paddingLeft: function(i, node) { return 4; },
                    // paddingRight: function(i, node) { return 4; },
                    // paddingTop: function(i, node) { return 2; },
                    // paddingBottom: function(i, node) { return 2; },
                    // fillColor: function (i, node) { return null; }
                }
            },
            { text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8] },
            'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
            {
                style: 'tableExample',
                table: {
                    body: [
                        [
                            {
                                border: [false, true, false, false],
                                fillColor: '#eeeeee',
                                text: 'border:\n[false, true, false, false]'
                            },
                            {
                                border: [false, false, false, false],
                                fillColor: '#dddddd',
                                text: 'border:\n[false, false, false, false]'
                            },
                            {
                                border: [true, true, true, true],
                                fillColor: '#eeeeee',
                                text: 'border:\n[true, true, true, true]'
                            }
                        ],
                        [
                            {
                                rowSpan: 3,
                                border: [true, true, true, true],
                                fillColor: '#eeeeff',
                                text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
                            },
                            {
                                border: undefined,
                                fillColor: '#eeeeee',
                                text: 'border:\nundefined'
                            },
                            {
                                border: [true, false, false, false],
                                fillColor: '#dddddd',
                                text: 'border:\n[true, false, false, false]'
                            }
                        ],
                        [
                            '',
                            {
                                colSpan: 2,
                                border: [true, true, true, true],
                                fillColor: '#eeffee',
                                text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
                            },
                            ''
                        ],
                        [
                            '',
                            {
                                border: undefined,
                                fillColor: '#eeeeee',
                                text: 'border:\nundefined'
                            },
                            {
                                border: [false, false, true, true],
                                fillColor: '#dddddd',
                                text: 'border:\n[false, false, true, true]'
                            }
                        ]
                    ]
                },
                layout: {
                    defaultBorder: false,
                }
            },
            'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
            {
                style: 'tableExample',
                table: {
                    body: [
                        [
                            {
                                border: [false, false, false, false],
                                fillColor: '#eeeeee',
                                text: 'border:\n[false, false, false, false]'
                            },
                            {
                                fillColor: '#dddddd',
                                text: 'border:\nundefined'
                            },
                            {
                                fillColor: '#eeeeee',
                                text: 'border:\nundefined'
                            },
                        ],
                        [
                            {
                                fillColor: '#dddddd',
                                text: 'border:\nundefined'
                            },
                            {
                                fillColor: '#eeeeee',
                                text: 'border:\nundefined'
                            },
                            {
                                border: [true, true, false, false],
                                fillColor: '#dddddd',
                                text: 'border:\n[true, true, false, false]'
                            },
                        ]
                    ]
                }
            },
            'And some other examples with rowSpan/colSpan...',
            {
                style: 'tableExample',
                table: {
                    body: [
                        [
                            '',
                            'column 1',
                            'column 2',
                            'column 3'
                        ],
                        [
                            'row 1',
                            {
                                rowSpan: 3,
                                colSpan: 3,
                                border: [true, true, true, true],
                                fillColor: '#cccccc',
                                text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
                            },
                            '',
                            ''
                        ],
                        [
                            'row 2',
                            '',
                            '',
                            ''
                        ],
                        [
                            'row 3',
                            '',
                            '',
                            ''
                        ]
                    ]
                },
                layout: {
                    defaultBorder: false,
                }
            },
            {
                style: 'tableExample',
                table: {
                    body: [
                        [
                            {
                                colSpan: 3,
                                text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
                                fillColor: '#eeeeee',
                                border: [false, false, false, false]
                            },
                            '',
                            ''
                        ],
                        [
                            'border:\nundefined',
                            'border:\nundefined',
                            'border:\nundefined'
                        ]
                    ]
                }
            },
            {
                style: 'tableExample',
                table: {
                    body: [
                        [
                            { rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false] },
                            'border:\nundefined',
                            'border:\nundefined'
                        ],
                        [
                            '',
                            'border:\nundefined',
                            'border:\nundefined'
                        ],
                        [
                            '',
                            'border:\nundefined',
                            'border:\nundefined'
                        ]
                    ]
                }
            },
            { text: 'BorderColor per Cell with Column/row spans', pageBreak: 'before', style: 'subheader' },
            'Each cell-element can set the borderColor (the cell above or left of the current cell has priority',
            {
                style: 'tableExample',
                color: '#444',
                table: {
                    widths: [200, 'auto', 'auto'],
                    headerRows: 2,
                    // keepWithHeaderRows: 1,
                    body: [
                        [
                            {
                                text: 'Header with Colspan = 3',
                                style: 'tableHeader',
                                colSpan: 3,
                                borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                                alignment: 'center',
                            },
                            {},
                            {},
                        ],
                        [
                            {
                                text: 'Header 1',
                                style: 'tableHeader',
                                alignment: 'center',
                            },
                            {
                                text: 'Header 2',
                                style: 'tableHeader',
                                alignment: 'center',
                            },
                            {
                                text: 'Header 3',
                                style: 'tableHeader',
                                alignment: 'center',
                            },
                        ],
                        [
                            'Sample value 1',
                            'Sample value 2',
                            'Sample value 3',
                        ],
                        [
                            {
                                rowSpan: 3,
                                borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                                text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
                            },
                            'Sample value 2',
                            {
                                text: 'Sample value 3',
                                borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                            },
                        ],
                        [
                            '',
                            'Sample value 2',
                            'Sample value 3',
                        ],
                        [
                            'Sample value 1',
                            'Sample value 2',
                            'Sample value 3',
                        ],
                        [
                            'Sample value 1',
                            {
                                colSpan: 2,
                                rowSpan: 2,
                                borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                                text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time',
                            },
                            '',
                        ],
                        [
                            'Sample value 1',
                            {
                                text: 'a', borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                            },
                            {
                                text: '',
                                borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                            },
                        ],
                    ],
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
    pdfMake.createPdf(docDefinition).download('test.pdf');
})

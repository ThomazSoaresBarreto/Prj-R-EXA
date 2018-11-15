class OrderPedExameModel {
  constructor(
    public nomPaciente: string,
    public emailPaciente: string,
    public telPaciente: string,
    public endPaciente: string,
    public numEndPaciente: string,
    public compEndPaciente: string,
    public nomDentista: string,
    public CRODentista: string,
    public emailDentista: string,
    public telDentista: string,
    public endDentista: string,
    public numEndDentista: string,
    public compEndDentista: string,
    public dscObservacoes: string,
    public unidadeAtendimento: string,
    public orderPedExameServico: OrderPedExameServicoModel[] =[],
    public idOrderPedExame?: string,
    public dtPedExame?: any
  ){}
}

class OrderPedExameServicoModel {
  constructor(
    public idServico: string,
    public dscServico: string,
    public formaEntrega: FormaEntrega[]=[],
    public itensServico: ItensServicoModel[] = []
  ){}
}

class FormaEntrega {
  constructor(
    public idFormaEntrega: string,
    public dscFormaEntrega: string,
  ){}
}


class ItensServicoModel {
  constructor(
    public idItemServico: string,
    public dscItemServico: string,
    public odontograma: string[] = [],
    public subItensServico: SubItensServicoModel[] = []
  ){}
}

class SubItensServicoModel {
  constructor(
    public idSubItemServico: string,
    public dscSubItemServico: string,
    public itensSubItensServico: ItensSubItensServicoModel[]
  ){}
}

class ItensSubItensServicoModel {
  constructor(
    public idItensSubItensServico: string,
    public dscItensSubItensServico: string,
    public dscOpcao: string
  ){}
}


export { OrderPedExameModel, OrderPedExameServicoModel, ItensServicoModel,
          SubItensServicoModel, ItensSubItensServicoModel}



/*{
  "nomPaciente": "",
  "emailPaciente": "",
  "telPaciente": "",
  "endPaciente": "",
  "numEndPaciente": "",
  "compEndPaciente": "",
  "nomDentista": "",
  "CRODentista": "",
  "emailDentista": "",
  "telDentista": "",
  "endDentista": "",
  "numEndDentista": "",
  "compEndDentista": "",
  "dscObservações": "",
  "unidadeAtendimento":"",
  "orderPedExameServico": [
    {
      "idServico": "tomo",
      "dscServico": "Tomografia Computadorizada",
      "idFormaEntrega": [
        {
          "idFormaEntrega": "isCD",
          "dscFormaEntrega": "CD"
        },
        {
          "idFormaEntrega": "isImpresso",
          "dscFormaEntrega": "Impresso"
        },
        {
          "idFormaEntrega": "isDicom",
          "dscFormaEntrega": "Dicom"
        }
      ],
      "itensServico": [
        {
          "idItemServico": "idProtCirGuiada",
          "dscItemServico": "Protocolo para cirurgia guiada",
          "odontograma": [],
          "subItensServico": [
            {
              "idSubItemServico": "idProcedimento",
              "dscSubItemServico": "Procedimento(s):",
              "itensSubItensServico": [
                {
                  "idItensSubItensServico": "idMandibula",
                  "dscItensSubItensServico": "- Mandíbula",
                  "dscOpcao": ""
                },
                {
                  "idItensSubItensServico": "idMaxila",
                  "dscItensSubItensServico": "- Maxila",
                  "dscOpcao": ""
                }
              ]
            },
            {
              "idItensServico": "idLaboratorio",
              "dscSubItemServico": "Laboratório(s):",
              "itensSubItensServico": [
                {
                  "idItensSubItensServico": "idCompass3d",
                  "dscItensSubItensServico": "- Compass 3D",
                  "dscOpcao": ""
                }
              ]
            },
            {
              "idItensServico": "idCirurgiaGuiadaParcial",
              "dscSubItemServico": "Cirurgia Guiada Parcial:",
              "itensSubItensServico": [
                {
                  "idItensSubItensServico": "idTomoDicomCGP",
                  "dscItensSubItensServico": "- Tomografia do paciente (Dicom)",
                  "dscOpcao": ""
                },
                {
                  "idItensSubItensServico": "idEscaneamentoIntraoralCGP",
                  "dscItensSubItensServico": "- Escaneamento Intraoral",
                  "dscOpcao": ""
                },
                {
                  "idItensSubItensServico": "idPlanejamentoCGP",
                  "dscItensSubItensServico": "- Planejamento+guia com: 3 Furo",
                  "dscOpcao": "3 Furo"
                }
              ]
            }
          ]
        },
        {
          "idItensServico": "idImplante",
          "dscItemServico": "Implante",
          "odontograma": ["18","17","16"],
          "subItensServico": [
            {
              "idSubItemServico": "idComGuia",
              "dscSubItemServico": "Com guia",
              "itensSubItensServico": [
                {
                  "idItensSubItensServico": "idTecidoMole",
                  "dscItensSubItensServico": "- Tecido mole (uso de afastador)",
                  "dscOpcao": ""
                },
                {
                  "idItensSubItensServico": "idMaxilaCompleta",
                  "dscItensSubItensServico": "- Maxila completa",
                  "dscOpcao": ""
                }
              ]
            }
          ]
        },
        {
          "idItensServico": "idPeriodontia",
          "dscItemServico": "Periodontia",
          "odontograma": ["16","15"],
          "subItensServico": [
            {
              "idSubItemServico": "idSorrisoGengival",
              "dscSubItemServico": "Sorriso gengival",
              "itensSubItensServico": []
            },
            {
              "idItensServico": "idRecobrimentoRadicular",
              "dscSubItemServico": "Recobrimento radicular",
              "itensSubItensServico": []
            }
          ]
        },
        {
          "idItensServico": "idPrototipagem",
          "dscItemServico": "Prototipagem",
          "odontograma": [],
          "subItensServico": [
            {
              "idSubItemServico": "idBioparts",
              "dscSubItemServico": "Bioparts",
              "itensSubItensServico": []
            },
            {
              "idSubItemServico": "idCampoPrototipagem",
              "dscSubItemServico": "Texto Prototipagem",
              "itensSubItensServico": []
            }
          ]
        }
      ]
    }
  ]
}
*/

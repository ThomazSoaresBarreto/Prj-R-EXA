export interface Tomografia {
  id: string
  name: string
  descricao: string
  imagePath: string
  servicos?:string
}


/*orders =
  {
    servicoId: "tomo",
    nomeServico: "Tomografia Computadorizada",
    odontograma: ["14", "15", "18", "71", "75"],
    itemServico: [{item: "Protocolo para cirurgia guiada",
                  subitem: ["Compass 3D", "Mandíbula" ],
                  subitemcab: {titulo: "Cirurgia guiada parcial",
                                itemtitulo: [ "+Laudo e impressão",
                                              "Tomografia do paciente (Dicom)"]
                              }
                 },
                 {item: "Implante",
                               subitem: [],
                               subitemcab: {titulo: "Com Guia",
                                             itemtitulo: [ "Tecido mole (uso de afastador)",
                                                           "Maxila completa"]
                                           }
                  }*/

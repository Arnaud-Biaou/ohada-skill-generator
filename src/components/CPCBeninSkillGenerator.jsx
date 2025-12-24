import React, { useState, useMemo } from 'react';
import { Copy, Download, ChevronDown, ChevronRight, RotateCcw, Book, Scale } from 'lucide-react';

export default function CPCBeninSkillGenerator() {
  const [skillName, setSkillName] = useState('CPC Bénin - Code de Procédure Civile');
  const [skillDescription, setSkillDescription] = useState('Loi N° 2008-07 du 28 février 2011 - Art. 1 à 1231');
  const [mainInstructions, setMainInstructions] = useState('Code de Procédure Civile, Commerciale, Sociale, Administrative et des Comptes du Bénin. Modifié par les lois 2016-16, 2020-08 et 2022-20.');

  const [livres, setLivres] = useState([
{
        num: 'PREMIER',
        title: 'LIVRE PREMIER - DES DISPOSITIONS COMMUNES A TOUTES LES JURIDICTIONS',
        titres: [
{
            num: 'PREMIER',
            title: 'TITRE PREMIER - DES DISPOSITIONS LIMINAIRES',
            chapitres: [
{
                num: 'I',
                title: 'CHAPITRE I - DES PRINCIPES DIRECTEURS DU PROCES CIVIL',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DE L\'INSTANCE',
                    subsections: [],
                    articlesIntro: 'Art. 2-4',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DE L\'OBJET DU LITIGE',
                    subsections: [],
                    articlesIntro: 'Art. 5-6',
                    content: ''
                  },
{
                    num: 'III',
                    title: 'SECTION III - DES FAITS',
                    subsections: [],
                    articlesIntro: 'Art. 7-9',
                    content: ''
                  },
{
                    num: 'IV',
                    title: 'SECTION IV - DES PREUVES',
                    subsections: [],
                    articlesIntro: 'Art. 10-12',
                    content: ''
                  },
{
                    num: 'V',
                    title: 'SECTION V - DU DROIT',
                    subsections: [],
                    articlesIntro: 'Art. 13-14',
                    content: ''
                  },
{
                    num: 'VI',
                    title: 'SECTION VI - DE LA CONTRADICTION',
                    subsections: [],
                    articlesIntro: 'Art. 15-18',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              },
{
                num: 'II',
                title: 'CHAPITRE II - DE LA REPRESENTATION ET ASSISTANCE EN JUSTICE',
                sections: [],
                articlesIntro: 'Art. 19-29',
                contentIntro: ''
              },
{
                num: 'III',
                title: 'CHAPITRE III - DE L\'ACTION EN JUSTICE',
                sections: [],
                articlesIntro: 'Art. 30-33',
                contentIntro: ''
              },
{
                num: 'IV',
                title: 'CHAPITRE IV - DE LA COMPETENCE DES JURIDICTIONS',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DE LA COMPETENCE D\'ATTRIBUTION',
                    subsections: [],
                    articlesIntro: 'Art. 34-39',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DE LA COMPÉTENCE TERRITORIALE',
                    subsections: [],
                    articlesIntro: 'Art. 40-52',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              }
            ],
            articlesIntro: 'Art. 1er',
            contentIntro: ''
          },
{
            num: 'II',
            title: 'TITRE II - DE L\'INTRODUCTION ET DE L\'INSTRUCTION DES INSTANCES',
            chapitres: [
{
                num: 'I',
                title: 'CHAPITRE I - DES ACTES ET DÉLAIS DE PROCÉDURE',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DES ACTES',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DE LA FORME DES ACTES',
                        paragraphes: [],
                        articlesIntro: 'Art. 53-55',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DE LA FORME DES NOTIFICATIONS',
                        paragraphes: [
{
                            num: '1',
                            title: 'Paragraphe 1: De la signification',
                            articles: 'Art. 58-70',
                            content: ''
                          },
{
                            num: '2',
                            title: 'Paragraphe 2 : De la notification des actes en la forme ordinaire',
                            articles: 'Art. 71-77',
                            content: ''
                          },
{
                            num: '3',
                            title: 'Paragraphe 3 : Des notifications entre avocats',
                            articles: 'Art. 78-79',
                            content: ''
                          }
                        ],
                        articlesIntro: 'Art. 56-57',
                        articles: '',
                        content: ''
                      },
{
                        num: '3',
                        title: 'SOUS-SECTION 3 - DES REGLES PARTICULIERES A LA NOTIFICATION DES JUGEMENTS',
                        paragraphes: [],
                        articlesIntro: 'Art. 80-84',
                        articles: '',
                        content: ''
                      },
{
                        num: '4',
                        title: 'SOUS-SECTION 4 - DES REGLES PARTICULIERES AUX NOTIFICATIONS INTERNATIONALES',
                        paragraphes: [
{
                            num: '1',
                            title: 'Paragraphe 1 : De la notification des actes à l\'étranger',
                            articles: 'Art. 85-91',
                            content: ''
                          },
{
                            num: '2',
                            title: 'Paragraphe 2 : De la notification des actes en provenance de l\'étranger',
                            articles: 'Art. 92-99',
                            content: ''
                          }
                        ],
                        articlesIntro: '',
                        articles: '',
                        content: ''
                      },
{
                        num: '5',
                        title: 'SOUS-SECTION 5 - DU LIEU DES NOTIFICATIONS',
                        paragraphes: [],
                        articlesIntro: 'Art. 100-103',
                        articles: '',
                        content: ''
                      },
{
                        num: '6',
                        title: 'SOUS-SECTION 6 - DES DISPOSITIONS DIVERSES',
                        paragraphes: [],
                        articlesIntro: 'Art. 104-105',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: '',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DES DELAIS',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DES DELAIS DE COMPARUTION',
                        paragraphes: [],
                        articlesIntro: 'Art. 106-108',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DE LA COMPUTATION DES DELAIS',
                        paragraphes: [],
                        articlesIntro: 'Art. 109-115',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: '',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              },
{
                num: 'II',
                title: 'CHAPITRE II - DE L\'INTRODUCTION DE L\'INSTANCE',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DE LA DEMANDE INITIALE',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DE LA REQUETE ECRITE',
                        paragraphes: [
{
                            num: '1',
                            title: 'Paragraphe 1 : De la convocation',
                            articles: 'Art. 122-125',
                            content: ''
                          },
{
                            num: '2',
                            title: 'Paragraphe 2 : Des personnes à convoquer ou à assigner',
                            articles: 'Art. 126',
                            content: ''
                          }
                        ],
                        articlesIntro: 'Art. 117-121',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DE LA REQUETE CONJOINTE',
                        paragraphes: [],
                        articlesIntro: 'Art. 127-130',
                        articles: '',
                        content: ''
                      },
{
                        num: '3',
                        title: 'SOUS-SECTION 3 - DE L\'ASSIGNATION',
                        paragraphes: [],
                        articlesIntro: 'Art. 131-132',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: 'Art. 116',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DES DEMANDES INCIDENTES',
                    subsections: [],
                    articlesIntro: 'Art. 133-140',
                    content: ''
                  },
{
                    num: 'III',
                    title: 'SECTION III - DE LA MISE AU ROLE',
                    subsections: [],
                    articlesIntro: 'Art. 141-159',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              },
{
                num: 'III',
                title: 'CHAPITRE III - DE LA PROCEDURE PREPARATOIRE AU JUGEMENT',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DE L\'APPEL DES CAUSES',
                    subsections: [],
                    articlesIntro: 'Art. 160-161',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DES MOYENS DE DEFENSE',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DE LA DEFENSE AU FOND',
                        paragraphes: [],
                        articlesIntro: 'Art. 162-163',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DES EXCEPTIONS DE PROCEDURE',
                        paragraphes: [
{
                            num: '1',
                            title: 'Paragraphe 1 : De l\'exception de caution judicatum solvi',
                            articles: 'Art. 166',
                            content: ''
                          },
{
                            num: '2',
                            title: 'Paragraphe 2 : Des exceptions d\'incompétence',
                            articles: 'Art. 167-178',
                            content: ''
                          },
{
                            num: '3',
                            title: 'Paragraphe 3 : Des exceptions de litispendance et de connexité',
                            articles: 'Art. 179-186',
                            content: ''
                          },
{
                            num: '4',
                            title: 'Paragraphe 4 : Des exceptions dilatoires',
                            articles: 'Art. 187-190',
                            content: ''
                          },
{
                            num: '5',
                            title: 'Paragraphe 5 : Des exceptions de nullité',
                            articles: 'Art. 191-199',
                            content: ''
                          },
{
                            num: '6',
                            title: 'Paragraphe 6 : De l\'exception d\'inconstitutionnalité',
                            articles: 'Art. 200-203',
                            content: ''
                          }
                        ],
                        articlesIntro: 'Art. 164-165',
                        articles: '',
                        content: ''
                      },
{
                        num: '3',
                        title: 'SOUS-SECTION 3 - DES FINS DE NON RECEVOIR',
                        paragraphes: [],
                        articlesIntro: 'Art. 204-208',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: '',
                    content: ''
                  },
{
                    num: 'III',
                    title: 'SECTION III - DES MESURES D\'INSTRUCTION',
                    subsections: [
{
                        num: '',
                        title: 'SOUS-SECTION I - DES PIÈCES',
                        paragraphes: [
{
                            num: '1',
                            title: 'Paragraphe 1 : De la communication des pièces entre les parties',
                            articles: 'Art. 209-214',
                            content: ''
                          },
{
                            num: '2',
                            title: 'Paragraphe 2 : De l\'obtention des pièces détenues par un tiers',
                            articles: 'Art. 215-218',
                            content: ''
                          },
{
                            num: '3',
                            title: 'Paragraphe 3 : De la production des pièces détenues par une partie',
                            articles: 'Art. 219',
                            content: ''
                          },
{
                            num: '4',
                            title: 'Paragraphe 4 : De la communication de pièces au ministère public',
                            articles: 'Art. 220-221',
                            content: ''
                          },
{
                            num: '5',
                            title: 'Paragraphe 5 : Du dépôt et du retrait de pièce',
                            articles: 'Art. 222-223',
                            content: ''
                          }
                        ],
                        articlesIntro: '',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DES DECISIONS ORDONNANT DES MESURES D\'INSTRUCTION',
                        paragraphes: [],
                        articlesIntro: 'Art. 224-234',
                        articles: '',
                        content: ''
                      },
{
                        num: '3',
                        title: 'SOUS-SECTION 3 - DE L\'EXECUTION DES MESURES D\'INSTRUCTION',
                        paragraphes: [],
                        articlesIntro: 'Art. 235-255',
                        articles: '',
                        content: ''
                      },
{
                        num: '4',
                        title: 'SOUS-SECTION 4 - DES VERIFICATIONS PERSONNELLES DU JUGE',
                        paragraphes: [],
                        articlesIntro: 'Art. 256-259',
                        articles: '',
                        content: ''
                      },
{
                        num: '5',
                        title: 'SOUS-SECTION 5 - DE LA COMPARUTION PERSONNELLE DES PARTIES',
                        paragraphes: [],
                        articlesIntro: 'Art. 260-274',
                        articles: '',
                        content: ''
                      },
{
                        num: '6',
                        title: 'SOUS-SECTION 6 - DE L\'ENQUETE',
                        paragraphes: [
{
                            num: '1',
                            title: 'Paragraphe 1 : Des dispositions générales',
                            articles: 'Art. 275-291',
                            content: ''
                          },
{
                            num: '2',
                            title: 'Paragraphe 2 : De l\'enquête ordinaire',
                            articles: 'Art. 292-300',
                            content: ''
                          },
{
                            num: '3',
                            title: 'Paragraphe 3 : De l\'enquête sur-le-champ',
                            articles: 'Art. 301',
                            content: ''
                          }
                        ],
                        articlesIntro: '',
                        articles: '',
                        content: ''
                      },
{
                        num: '7',
                        title: 'SOUS-SECTION 7 - DES MESURES D\'INSTRUCTION EXECUTEES PAR UN TECHNICIEN',
                        paragraphes: [
{
                            num: '1',
                            title: 'Paragraphe 1 : Des dispositions communes',
                            articles: 'Art. 302-318',
                            content: ''
                          },
{
                            num: '2',
                            title: 'Paragraphe 2 : Des constatations',
                            articles: 'Art. 319-324',
                            content: ''
                          },
{
                            num: '3',
                            title: 'Paragraphe 3 : De la consultation',
                            articles: 'Art. 325-330',
                            content: ''
                          },
{
                            num: '4',
                            title: 'Paragraphe 4 : De l\'expertise',
                            articles: 'Art. 331-352',
                            content: ''
                          }
                        ],
                        articlesIntro: '',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: '',
                    content: ''
                  },
{
                    num: 'IV',
                    title: 'SECTION IV - DES CONTESTATIONS RELATIVES A LA PREUVE LITTERALE',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DES CONTESTATIONS RELATIVES AUX ACTES SOUS SEING PRIVE',
                        paragraphes: [
{
                            num: '1',
                            title: 'Paragraphe 1 : De la vérification d\'écriture',
                            articles: 'Art. 354-365',
                            content: ''
                          },
{
                            num: '2',
                            title: 'Paragraphe 2 : Du faux',
                            articles: 'Art. 366-369',
                            content: ''
                          }
                        ],
                        articlesIntro: '',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DE L\'INSCRIPTION DE FAUX CONTRE LES ACTES AUTHENTIQUES',
                        paragraphes: [
{
                            num: '1',
                            title: 'Paragraphe 1 : De l\'inscription incidente de faux',
                            articles: 'Art. 373-381',
                            content: ''
                          },
{
                            num: '2',
                            title: 'Paragraphe 2 : De l\'inscription principale de faux',
                            articles: 'Art. 382-384',
                            content: ''
                          }
                        ],
                        articlesIntro: 'Art. 370-372',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: 'Art. 353',
                    content: ''
                  },
{
                    num: 'V',
                    title: 'SECTION V - DU SERMENT JUDICIAIRE',
                    subsections: [],
                    articlesIntro: 'Art. 385-390',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              },
{
                num: 'IV',
                title: 'CHAPITRE IV - DES INCIDENTS D\'INSTANCE',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DES DEMANDES INCIDENTES',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DES DEMANDES ADDITIONNELLES ET RECONVENTIONNELLES',
                        paragraphes: [],
                        articlesIntro: 'Art. 391-393',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DE L\'INTERVENTION',
                        paragraphes: [
{
                            num: '1',
                            title: 'Paragraphe 1 : De l\'intervention volontaire',
                            articles: 'Art. 397-399',
                            content: ''
                          },
{
                            num: '2',
                            title: 'Paragraphe 2 : De l\'intervention forcée',
                            articles: 'Art. 400-415',
                            content: ''
                          },
{
                            num: '3',
                            title: 'Paragraphe 3 : De l\'intervention du ministère public',
                            articles: 'Art. 416-422',
                            content: ''
                          }
                        ],
                        articlesIntro: 'Art. 394-396',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: '',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DE L\'ABSTENTION, DE LA RECUSATION ET DU RENVOI',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DE L\'ABSTENTION',
                        paragraphes: [],
                        articlesIntro: 'Art. 423-424',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DE LA RECUSATION',
                        paragraphes: [],
                        articlesIntro: 'Art. 425-439',
                        articles: '',
                        content: ''
                      },
{
                        num: '3',
                        title: 'SOUS-SECTION 3 - DU RENVOI A UNE AUTRE JURIDICTION',
                        paragraphes: [
{
                            num: '1',
                            title: 'Paragraphe 1 : Du renvoi pour cause de suspicion légitime',
                            articles: 'Art. 440-447',
                            content: ''
                          },
{
                            num: '2',
                            title: 'Paragraphe 2 : Du renvoi pour cause de récusation contre plusieurs juges',
                            articles: 'Art. 448',
                            content: ''
                          },
{
                            num: '3',
                            title: 'Paragraphe 3 : Du renvoi pour cause de sûreté publique',
                            articles: 'Art. 449-450',
                            content: ''
                          }
                        ],
                        articlesIntro: '',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: '',
                    content: ''
                  },
{
                    num: 'III',
                    title: 'SECTION III - DES JONCTIONS ET DISJONCTIONS D\'INSTANCES',
                    subsections: [],
                    articlesIntro: 'Art. 451-452',
                    content: ''
                  },
{
                    num: 'IV',
                    title: 'SECTION IV - DE L\'INTERRUPTION DE L\'INSTANCE',
                    subsections: [],
                    articlesIntro: 'Art. 453-460',
                    content: ''
                  },
{
                    num: 'V',
                    title: 'SECTION V - DE LA SUSPENSION DE L\'INSTANCE',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DU SURSIS A STATUER',
                        paragraphes: [],
                        articlesIntro: 'Art. 462-465',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DE LA RADIATION',
                        paragraphes: [],
                        articlesIntro: 'Art. 466-468',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: 'Art. 461',
                    content: ''
                  },
{
                    num: 'VI',
                    title: 'SECTION VI - DE L\'EXTINCTION DE L\'INSTANCE',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DE LA PEREMPTION D\'INSTANCE',
                        paragraphes: [],
                        articlesIntro: 'Art. 471-478',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DU DESISTEMENT D\'INSTANCE',
                        paragraphes: [
{
                            num: '1',
                            title: 'Paragraphe 1 : Du désistement de la demande en première instance',
                            articles: 'Art. 479-484',
                            content: ''
                          },
{
                            num: '2',
                            title: 'Paragraphe 2 : Du désistement de l\'appel ou de l\'opposition',
                            articles: 'Art. 485-490',
                            content: ''
                          }
                        ],
                        articlesIntro: '',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: 'Art. 469-470',
                    content: ''
                  },
{
                    num: 'VII',
                    title: 'SECTION VII - DE L\'ACQUIESCEMENT',
                    subsections: [],
                    articlesIntro: 'Art. 491-493',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              }
            ],
            articlesIntro: '',
            contentIntro: ''
          },
{
            num: 'III',
            title: 'TITRE III - DE LA CONCILIATION, DE L\'AUDIENCE ET DU JUGEMENT',
            chapitres: [
{
                num: 'I',
                title: 'CHAPITRE I - DE LA CONCILIATION',
                sections: [],
                articlesIntro: 'Art. 494-496',
                contentIntro: ''
              },
{
                num: 'II',
                title: 'CHAPITRE II - DE L\'AUDIENCE',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DES DEBATS',
                    subsections: [],
                    articlesIntro: 'Art. 497-515',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DE LA PROCEDURE EN CHAMBRE DU CONSEIL',
                    subsections: [],
                    articlesIntro: 'Art. 516-519',
                    content: ''
                  },
{
                    num: 'III',
                    title: 'SECTION III - DU DELIBERE',
                    subsections: [],
                    articlesIntro: 'Art. 520-521',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              },
{
                num: 'III',
                title: 'CHAPITRE III - DU JUGEMENT',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DU JUGEMENT CONTRADICTOIRE',
                    subsections: [],
                    articlesIntro: 'Art. 536-539',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DU JUGEMENT RENDU PAR DÉFAUT ET DU JUGEMENTRÉPUTÉ CONTRADICTOIRE',
                    subsections: [],
                    articlesIntro: 'Art. 540-548',
                    content: ''
                  },
{
                    num: 'III',
                    title: 'SECTION III - DES DISPOSITIONS SPECIALES',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DES JUGEMENTS SUR LE FOND',
                        paragraphes: [],
                        articlesIntro: 'Art. 549-550',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DES AUTRES JUGEMENTS',
                        paragraphes: [
{
                            num: '1',
                            title: 'Paragraphe 1 : Des jugements avant dire droit',
                            articles: 'Art. 551-552',
                            content: ''
                          },
{
                            num: '2',
                            title: 'Paragraphe 2 : Des ordonnances de référé',
                            articles: 'Art. 553-561',
                            content: ''
                          },
{
                            num: '3',
                            title: 'Paragraphe 3 : Des ordonnances sur requête',
                            articles: 'Art. 562-568',
                            content: ''
                          }
                        ],
                        articlesIntro: '',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: '',
                    content: ''
                  },
{
                    num: 'IV',
                    title: 'SECTION IV - DE L\'EXECUTION DU JUGEMENT',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DES CONDITIONS GENERALES DE L\'EXECUTION',
                        paragraphes: [],
                        articlesIntro: 'Art. 569-582',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DU JUGE DE L\'EXECUTION',
                        paragraphes: [],
                        articlesIntro: 'Art. 583-592',
                        articles: '',
                        content: ''
                      },
{
                        num: '3',
                        title: 'SOUS-SECTION 3 - DU DELAI DE GRACE',
                        paragraphes: [],
                        articlesIntro: 'Art. 593-593.2',
                        articles: '',
                        content: ''
                      },
{
                        num: '4',
                        title: 'SOUS-SECTION 4 - ASTREINTE',
                        paragraphes: [],
                        articlesIntro: 'Art. 594-595.3',
                        articles: '',
                        content: ''
                      },
{
                        num: '5',
                        title: 'SOUS-SECTION 5 - EXECUTION PROVISOIRE',
                        paragraphes: [],
                        articlesIntro: 'Art. 596-606',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: '',
                    content: ''
                  }
                ],
                articlesIntro: 'Art. 522-535',
                contentIntro: ''
              }
            ],
            articlesIntro: '',
            contentIntro: ''
          },
{
            num: 'IV',
            title: 'TITRE IV - DES VOIES DE RECOURS',
            chapitres: [
{
                num: 'I',
                title: 'CHAPITRE I - DES DISPOSITIONS COMMUNES',
                sections: [],
                articlesIntro: 'Art. 608-618',
                contentIntro: ''
              },
{
                num: 'II',
                title: 'CHAPITRE II - DES VOIES ORDINAIRES DE RECOURS',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DE L\'APPEL',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DES JUGEMENTS SUSCEPTIBLES D\'APPEL',
                        paragraphes: [],
                        articlesIntro: 'Art. 623-626',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DES PARTIES',
                        paragraphes: [],
                        articlesIntro: 'Art. 627-639',
                        articles: '',
                        content: ''
                      },
{
                        num: '3',
                        title: 'SOUS-SECTION 3 - DES EFFETS DE L\'APPEL',
                        paragraphes: [
{
                            num: '1',
                            title: 'Paragraphe 1 : De l\'effet dévolutif',
                            articles: 'Art. 640-645',
                            content: ''
                          },
{
                            num: '2',
                            title: 'Paragraphe 2 : De l\'évocation',
                            articles: 'Art. 646',
                            content: ''
                          }
                        ],
                        articlesIntro: '',
                        articles: '',
                        content: ''
                      },
{
                        num: '4',
                        title: 'SOUS-SECTION 4 - DES DISPOSITIONS FINALES',
                        paragraphes: [],
                        articlesIntro: 'Art. 647',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: 'Art. 621-622',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DE L\'OPPOSITION',
                    subsections: [],
                    articlesIntro: 'Art. 648-653',
                    content: ''
                  }
                ],
                articlesIntro: 'Art. 619-620',
                contentIntro: ''
              },
{
                num: 'III',
                title: 'CHAPITRE III - DES VOIES DE RECOURS EXTRAORDINAIRES',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DE LA TIERCE OPPOSITION',
                    subsections: [],
                    articlesIntro: 'Art. 657-667',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DU RECOURS EN REVISION',
                    subsections: [],
                    articlesIntro: 'Art. 668-678',
                    content: ''
                  },
{
                    num: 'III',
                    title: 'SECTION III - DU POURVOI EN CASSATION',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DE L\'OUVERTURE DU POURVOI EN CASSATION',
                        paragraphes: [],
                        articlesIntro: 'Art. 680-691',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DES MODES ET FORMES DU POURVOI EN CASSATION',
                        paragraphes: [],
                        articlesIntro: 'Art. 692-693',
                        articles: '',
                        content: ''
                      },
{
                        num: '3',
                        title: 'SOUS-SECTION 3 - DES EFFETS DU POURVOI EN CASSATION',
                        paragraphes: [],
                        articlesIntro: 'Art. 694-712',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: 'Art. 679',
                    content: ''
                  }
                ],
                articlesIntro: 'Art. 654-656',
                contentIntro: ''
              }
            ],
            articlesIntro: 'Art. 607',
            contentIntro: ''
          },
{
            num: 'V',
            title: 'TITRE V - DES FRAIS ET DES DEPENS',
            chapitres: [
{
                num: 'I',
                title: 'CHAPITRE I - DE LA CHARGE DES DEPENS',
                sections: [],
                articlesIntro: 'Art. 713-717',
                contentIntro: ''
              },
{
                num: 'II',
                title: 'CHAPITRE II - DE LA LIQUIDATION DES DEPENS ET DES FRAIS',
                sections: [],
                articlesIntro: 'Art. 718-724',
                contentIntro: ''
              }
            ],
            articlesIntro: '',
            contentIntro: ''
          },
{
            num: 'VI',
            title: 'TITRE VI - DES COMMISSIONS ROGATOIRES',
            chapitres: [
{
                num: 'I',
                title: 'CHAPITRE I - DES COMMISSIONS ROGATOIRES INTERNES',
                sections: [],
                articlesIntro: 'Art. 725-727',
                contentIntro: ''
              },
{
                num: 'II',
                title: 'CHAPITRE II - DES COMMISSIONS ROGATOIRES INTERNATIONALES',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DES COMMISSIONS ROGATOIRES A DESTINATION D\'UN ETAT ETRANGER',
                    subsections: [],
                    articlesIntro: 'Art. 728-730',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DES COMMISSIONS ROGATOIRES EN PROVENANCE D\'UN ETAT ETRANGER',
                    subsections: [],
                    articlesIntro: 'Art. 731-743',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              }
            ],
            articlesIntro: '',
            contentIntro: ''
          }
        ]
      },
{
        num: 'DEUXIEME',
        title: 'LIVRE DEUXIEME - DES DISPOSITIONS PARTICULIERES A CHAQUE JURIDICTION',
        titres: [
{
            num: 'PREMIER',
            title: 'TITRE PREMIER - DE LA PROCEDURE DEVANT LE TRIBUNAL DE PREMIERE INSTANCE',
            chapitres: [
{
                num: 'I',
                title: 'CHAPITRE I - DE LA PROCEDURE DEVANT LE TRIBUNAL STATUANT EN MATIERE',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DE LA PROCEDURE EN MATIERE CONTENTIEUSE',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DE LA PROCEDURE ORDINAIRE',
                        paragraphes: [
{
                            num: '1',
                            title: 'Paragraphe 1 : De la saisine du tribunal',
                            articles: 'Art. 747-749',
                            content: ''
                          },
{
                            num: '2',
                            title: 'Paragraphe 2 : Du renvoi à l\'audience',
                            articles: 'Art. 750-753',
                            content: ''
                          },
{
                            num: '3',
                            title: 'Paragraphe 3 : De la mise en état',
                            articles: 'Art. 754-759',
                            content: ''
                          },
{
                            num: '4',
                            title: 'Paragraphe 4 : Des dispositions communes',
                            articles: 'Art. 760-761',
                            content: ''
                          }
                        ],
                        articlesIntro: '',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DE LA PROCÉDURE A JOUR FIXE',
                        paragraphes: [],
                        articlesIntro: 'Art. 762-766',
                        articles: '',
                        content: ''
                      },
{
                        num: '3',
                        title: 'SOUS-SECTION 3 - DE LA REQUÊTE CONJOINTE',
                        paragraphes: [],
                        articlesIntro: 'Art. 767-768',
                        articles: '',
                        content: ''
                      },
{
                        num: '4',
                        title: 'SOUS-SECTION 4 - PROCÉDURE DES PETITES CRÉANCES',
                        paragraphes: [],
                        articlesIntro: 'Art. 768.1-768.8',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: 'Art. 744-746',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DE LA PROCÉDURE EN MATIÈRE GRACIEUSE',
                    subsections: [],
                    articlesIntro: 'Art. 769-771',
                    content: ''
                  },
{
                    num: 'III',
                    title: 'SECTION III - DES RÈGLES PARTICULIÈRES A LA MATIÈRE COMMERCIALE',
                    subsections: [],
                    articlesIntro: 'Art. 772-776.9',
                    content: ''
                  },
{
                    num: 'IV',
                    title: 'SECTION IV - DES DISPOSITIONS DIVERSES',
                    subsections: [],
                    articlesIntro: 'Art. 777-781',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              },
{
                num: 'II',
                title: 'CHAPITRE II - DE LA PROCÉDURE DEVANT LE TRIBUNAL STATUANT EN MATIÈRE SOCIALE',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DE LA COMPÉTENCE',
                    subsections: [],
                    articlesIntro: 'Art. 782-783',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DE L\'INSTANCE',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DE LA SAISINE DU TRIBUNAL',
                        paragraphes: [],
                        articlesIntro: 'Art. 785-790',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DE LA RECEVABILITE DES DEMANDES',
                        paragraphes: [],
                        articlesIntro: 'Art. 791-796',
                        articles: '',
                        content: ''
                      },
{
                        num: '3',
                        title: 'SOUS-SECTION 3 - DE L\'ASSISTANCE ET DE LA REPRESENTATION DES PARTIES',
                        paragraphes: [],
                        articlesIntro: 'Art. 797',
                        articles: '',
                        content: ''
                      },
{
                        num: '4',
                        title: 'SOUS-SECTION 4 - DE LA TENTATIVE DE CONCILIATION',
                        paragraphes: [],
                        articlesIntro: 'Art. 798-803',
                        articles: '',
                        content: ''
                      },
{
                        num: '5',
                        title: 'SOUS-SECTION 5 - DU JUGEMENT',
                        paragraphes: [],
                        articlesIntro: 'Art. 804-806',
                        articles: '',
                        content: ''
                      },
{
                        num: '6',
                        title: 'SOUS-SECTION 6 - DU REFERE EN MATIERE SOCIALE',
                        paragraphes: [],
                        articlesIntro: 'Art. 807-808',
                        articles: '',
                        content: ''
                      },
{
                        num: '7',
                        title: 'SOUS-SECTION 7 - DE L\'EXECUTION DES JUGEMENTS',
                        paragraphes: [],
                        articlesIntro: 'Art. 809',
                        articles: '',
                        content: ''
                      },
{
                        num: '8',
                        title: 'SOUS-SECTION 8 - DES DISPOSITIONS GENERALES ET DIVERSES',
                        paragraphes: [],
                        articlesIntro: 'Art. 810',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: 'Art. 784',
                    content: ''
                  },
{
                    num: 'III',
                    title: 'SECTION III - DES VOIES DE RECOURS',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DE L\'OUVERTURE DES VOIES DE RECOURS',
                        paragraphes: [],
                        articlesIntro: 'Art. 811-813',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DE L\'OPPOSITION',
                        paragraphes: [],
                        articlesIntro: 'Art. 814',
                        articles: '',
                        content: ''
                      },
{
                        num: '3',
                        title: 'SOUS-SECTION 3 - DE LA PROCEDURE D\'OPPOSITION A L\'EXECUTION DES CONTRAINTES DELIVREES PAR LA CAISSE NATIONALE DE SECURITE SOCIALE (CNSS)',
                        paragraphes: [],
                        articlesIntro: 'Art. 815',
                        articles: '',
                        content: ''
                      },
{
                        num: '4',
                        title: 'SOUS-SECTION 4 - DE L\'APPEL',
                        paragraphes: [],
                        articlesIntro: 'Art. 816-817',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: '',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              },
{
                num: 'III',
                title: 'CHAPITRE III - DE LA PROCEDURE DEVANT LES JURIDICTIONS STATUANT',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DE LA COMPETENCE',
                    subsections: [],
                    articlesIntro: 'Art. 818',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DE L\'INSTANCE',
                    subsections: [
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DES DELAIS',
                        paragraphes: [],
                        articlesIntro: 'Art. 827-829',
                        articles: '',
                        content: ''
                      },
{
                        num: '3',
                        title: 'SOUS-SECTION 3 - DE L\'INSTRUCTION',
                        paragraphes: [],
                        articlesIntro: 'Art. 830-837',
                        articles: '',
                        content: ''
                      },
{
                        num: '4',
                        title: 'SOUS-SECTION 4 - DU SURSIS A EXECUTER ET DU REFERE',
                        paragraphes: [],
                        articlesIntro: 'Art. 838-840',
                        articles: '',
                        content: ''
                      },
{
                        num: '5',
                        title: 'SOUS-SECTION 5 - DU JUGEMENT',
                        paragraphes: [],
                        articlesIntro: 'Art. 841-848',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: 'Art. 819-826',
                    content: ''
                  },
{
                    num: 'III',
                    title: 'SECTION III - DES VOIES DE RECOURS',
                    subsections: [],
                    articlesIntro: 'Art. 849-853',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              },
{
                num: 'IV',
                title: 'CHAPITRE IV - DES POUVOIRS DU PRESIDENT',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DES ORDONNANCES DE REFERE',
                    subsections: [],
                    articlesIntro: 'Art. 854-856',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DES ORDONNANCES SUR REQUETE',
                    subsections: [],
                    articlesIntro: 'Art. 857-858',
                    content: ''
                  },
{
                    num: 'III',
                    title: 'SECTION III - DES MESURES D\'ADMINISTRATION JUDICIAIRE',
                    subsections: [],
                    articlesIntro: 'Art. 859-861',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              }
            ],
            articlesIntro: '',
            contentIntro: ''
          },
{
            num: 'II',
            title: 'TITRE II - DES DISPOSITIONS PARTICULIERES DEVANT LA COUR D\'APPEL',
            chapitres: [
{
                num: 'I',
                title: 'CHAPITRE I - DE LA PROCEDURE DEVANT LA COUR STATUANT EN MATIERE JUDICIAIRE,',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DE LA COMPETENCE, DE LA SAISINE ET DE LA MISE AU ROLE',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DE LA COMPETENCE',
                        paragraphes: [],
                        articlesIntro: 'Art. 862',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DE LA SAISINE ET DE LA MISE AU ROLE',
                        paragraphes: [
{
                            num: '1',
                            title: 'Paragraphe 1 : Des dispositions communes',
                            articles: 'Art. 863-865',
                            content: ''
                          },
{
                            num: '2',
                            title: 'Paragraphe 2 : De la mise au rôle de l\'acte d\'appel fait par exploit d\'huissier',
                            articles: 'Art. 866',
                            content: ''
                          },
{
                            num: '3',
                            title: 'Paragraphe 3 : De la mise au rôle de l\'acte d\'appel fait par déclaration',
                            articles: 'Art. 867-870',
                            content: ''
                          }
                        ],
                        articlesIntro: '',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: '',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DE L\'INSTANCE',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DE LA PROCEDURE CONTENTIEUSE',
                        paragraphes: [
{
                            num: '1',
                            title: 'Paragraphe 1 : De la procédure ordinaire',
                            articles: 'Art. 872-881',
                            content: ''
                          },
{
                            num: '2',
                            title: 'Paragraphe 2 : Des procédures d\'urgence',
                            articles: 'Art. 882-888',
                            content: ''
                          },
{
                            num: '3',
                            title: 'Paragraphe 3 : De l\'appel par requête conjointe',
                            articles: 'Art. 889-893',
                            content: ''
                          }
                        ],
                        articlesIntro: '',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DE LA PROCEDURE EN MATIERE GRACIEUSE',
                        paragraphes: [],
                        articlesIntro: 'Art. 894-895',
                        articles: '',
                        content: ''
                      },
{
                        num: '3',
                        title: 'SOUS-SECTION 3 - DES DISPOSITIONS DIVERSES',
                        paragraphes: [],
                        articlesIntro: 'Art. 896-898',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: 'Art. 871',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              },
{
                num: 'II',
                title: 'CHAPITRE II - DE LA PROCEDURE DEVANT LA COUR STATUANT EN',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DE LA COMPETENCE',
                    subsections: [],
                    articlesIntro: 'Art. 899',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DE L\'INSTANCE',
                    subsections: [],
                    articlesIntro: 'Art. 900-901',
                    content: ''
                  },
{
                    num: 'III',
                    title: 'SECTION III - DES RECOURS',
                    subsections: [],
                    articlesIntro: 'Art. 902-905',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              },
{
                num: 'III',
                title: 'CHAPITRE III - DE LA PROCEDURE DEVANT LES JURIDICTIONS STATUANT',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DE LA COMPETENCE',
                    subsections: [],
                    articlesIntro: 'Art. 906-907',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DE L\'INSTANCE',
                    subsections: [],
                    articlesIntro: 'Art. 908-909',
                    content: ''
                  },
{
                    num: 'III',
                    title: 'SECTION III - DES RECOURS',
                    subsections: [],
                    articlesIntro: 'Art. 910-912',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              },
{
                num: 'IV',
                title: 'CHAPITRE IV - DES POUVOIRS DU PRESIDENT',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DES ORDONNANCES SUR REQUETE',
                    subsections: [],
                    articlesIntro: 'Art. 913-914',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DES MESURES D\'ADMINISTRATION JUDICIAIRE',
                    subsections: [],
                    articlesIntro: 'Art. 915-917',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              }
            ],
            articlesIntro: '',
            contentIntro: ''
          },
{
            num: 'III',
            title: 'TITRE III - DES DISPOSITIONS PARTICULIERES A LA COUR SUPREME',
            chapitres: [
{
                num: 'I',
                title: 'CHAPITRE I - DE LA PROCEDURE EN MATIERE CIVILE, COMMERCIALE,',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DE LA SAISINE',
                    subsections: [],
                    articlesIntro: 'Art. 918-932',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DE L\'INSTANCE',
                    subsections: [],
                    articlesIntro: 'Art. 933-947',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              },
{
                num: 'II',
                title: 'CHAPITRE II - DE LA PROCEDURE DEVANT LA CHAMBRE ADMINISTRATIVE',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DE LA COMPETENCE',
                    subsections: [],
                    articlesIntro: 'Art. 948-952',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DE L\'INSTANCE',
                    subsections: [],
                    articlesIntro: 'Art. 953-955',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              },
{
                num: 'III',
                title: 'CHAPITRE III - DE LA PROCEDURE DEVANT LA CHAMBRE DES COMPTES',
                sections: [],
                articlesIntro: 'Art. 956-958',
                contentIntro: ''
              },
{
                num: 'IV',
                title: 'CHAPITRE IV - DES DISPOSITIONS DIVERSES',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DU DESISTEMENT',
                    subsections: [],
                    articlesIntro: 'Art. 959-961',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DE LA RECUSATION',
                    subsections: [],
                    articlesIntro: 'Art. 962',
                    content: ''
                  },
{
                    num: 'III',
                    title: 'SECTION III - DE LA DEMANDE EN FAUX',
                    subsections: [],
                    articlesIntro: 'Art. 963-966',
                    content: ''
                  },
{
                    num: 'IV',
                    title: 'SECTION IV - DE LA PRISE A PARTIE',
                    subsections: [],
                    articlesIntro: 'Art. 967-979',
                    content: ''
                  },
{
                    num: 'V',
                    title: 'SECTION V - DES DISPOSITIONS PARTICULIERES AUX JURIDICTIONS DE RENVOI APRES CASSATION',
                    subsections: [],
                    articlesIntro: 'Art. 980-981',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              }
            ],
            articlesIntro: '',
            contentIntro: ''
          }
        ]
      },
{
        num: 'III',
        title: 'LIVRE III - DES PROCEDURES PARTICULIERES A CERTAINES MATIERES',
        titres: [
{
            num: 'I',
            title: 'TITRE I - DES DISPOSITIONS RELATIVES AUX PERSONNES ET A LA FAMILLE',
            chapitres: [
{
                num: 'I',
                title: 'CHAPITRE I - DES BIENS',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DE LA VENTE DES BIENS IMMEUBLES APPARTENANT A DES MINEURS',
                    subsections: [],
                    articlesIntro: 'Art. 982-992',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DES PARTAGES ET LICITATIONS',
                    subsections: [],
                    articlesIntro: 'Art. 993-1009',
                    content: ''
                  },
{
                    num: 'III',
                    title: 'SECTION III - DES DISPOSITIONS RELATIVES A L\'ADMINISTRATION PROVISOIRE DES BIENS EN CAS DE DECLARATION DE PRESOMPTION D\'ABSENCE',
                    subsections: [],
                    articlesIntro: 'Art. 1010-1012',
                    content: ''
                  },
{
                    num: 'IV',
                    title: 'SECTION IV - DE LA VENTE DU MOBILIER',
                    subsections: [],
                    articlesIntro: 'Art. 1013-1020',
                    content: ''
                  },
{
                    num: 'V',
                    title: 'SECTION V - DE LA PROCEDURE RELATIVE A L\'OUVERTURE DES SUCCESSIONS',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DE LA DESIGNATION DU LIQUIDATEUR DE SUCCESSION',
                        paragraphes: [],
                        articlesIntro: 'Art. 1021-1024',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DE L\'ADMINISTRATION DES SUCCESSIONS ET DES BIENS VACANTS',
                        paragraphes: [
{
                            num: '1',
                            title: 'Paragraphe 1 : Du curateur et de ses attributions',
                            articles: 'Art. 1025-1033',
                            content: ''
                          },
{
                            num: '2',
                            title: 'Paragraphe 2 : De l\'avis au curateur concernant les successions vacantes',
                            articles: 'Art. 1034-1036',
                            content: ''
                          },
{
                            num: '3',
                            title: 'Paragraphe 3 : Des obligations des curateurs lors de l\'ouverture d\'une succession',
                            articles: 'Art. 1037-1042',
                            content: ''
                          },
{
                            num: '4',
                            title: 'Paragraphe 4 : De la réalisation de l\'actif et du règlement du passif',
                            articles: 'Art. 1043-1046',
                            content: ''
                          },
{
                            num: '5',
                            title: 'Paragraphe 5 : De la remise des successions à l\'administration des domaines et de la vente des biens non réclamés qui en dépendent',
                            articles: 'Art. 1047-1049',
                            content: ''
                          },
{
                            num: '6',
                            title: 'Paragraphe 6 : De la surveillance administrative et de l\'apurement des comptes des curateurs',
                            articles: 'Art. 1050-1063',
                            content: ''
                          }
                        ],
                        articlesIntro: '',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: '',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              },
{
                num: 'II',
                title: 'CHAPITRE II - DES PERSONNES',
                sections: [
{
                    num: 'I',
                    title: 'SECTION I - DU JUGE DES TUTELLES ET DES CONSEILS DE FAMILLE',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DU JUGE DES TUTELLES',
                        paragraphes: [],
                        articlesIntro: 'Art. 1064',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DU CONSEIL DE FAMILLE',
                        paragraphes: [],
                        articlesIntro: 'Art. 1065-1069',
                        articles: '',
                        content: ''
                      },
{
                        num: '3',
                        title: 'SOUS-SECTION 3 - DES DISPOSITIONS COMMUNES',
                        paragraphes: [],
                        articlesIntro: 'Art. 1070-1076',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: '',
                    content: ''
                  },
{
                    num: 'II',
                    title: 'SECTION II - DES REGIMES DE PROTECTION APPLICABLES AUX MAJEURS',
                    subsections: [
{
                        num: '1',
                        title: 'SOUS-SECTION 1 - DES MAJEURS EN TUTELLE',
                        paragraphes: [],
                        articlesIntro: 'Art. 1077-1094',
                        articles: '',
                        content: ''
                      },
{
                        num: '2',
                        title: 'SOUS-SECTION 2 - DE LA CURATELLE',
                        paragraphes: [],
                        articlesIntro: 'Art. 1095-1096',
                        articles: '',
                        content: ''
                      },
{
                        num: '3',
                        title: 'SOUS-SECTION 3 - DU PLACEMENT SOUS SAUVEGARDE DE JUSTICE',
                        paragraphes: [],
                        articlesIntro: 'Art. 1097-1105',
                        articles: '',
                        content: ''
                      }
                    ],
                    articlesIntro: '',
                    content: ''
                  },
{
                    num: 'III',
                    title: 'SECTION III - DE L\'INTERVENTION EN JUSTICE QUANT AUX DROITS DES EPOUX',
                    subsections: [],
                    articlesIntro: 'Art. 1106-1109',
                    content: ''
                  },
{
                    num: 'IV',
                    title: 'SECTION IV - DE L\'APPOSITION DES SCELLES',
                    subsections: [],
                    articlesIntro: 'Art. 1110-1127',
                    content: ''
                  },
{
                    num: 'V',
                    title: 'SECTION V - DES OPPOSITIONS AUX SCELLES',
                    subsections: [],
                    articlesIntro: 'Art. 1128-1129',
                    content: ''
                  },
{
                    num: 'VI',
                    title: 'SECTION VI - DE LA LEVEE DES SCELLES',
                    subsections: [],
                    articlesIntro: 'Art. 1130-1143',
                    content: ''
                  },
{
                    num: 'VII',
                    title: 'SECTION VII - DE L\'INVENTAIRE',
                    subsections: [],
                    articlesIntro: 'Art. 1144-1147',
                    content: ''
                  },
{
                    num: 'VIII',
                    title: 'SECTION VIII - DU BENEFICE D\'INVENTAIRE',
                    subsections: [],
                    articlesIntro: 'Art. 1148-1158',
                    content: ''
                  }
                ],
                articlesIntro: '',
                contentIntro: ''
              }
            ],
            articlesIntro: '',
            contentIntro: ''
          },
{
            num: 'II',
            title: 'TITRE II - DE LA PROCEDURE D\'EXEQUATUR ET DE L\'ARBITRAGE',
            chapitres: [
{
                num: 'I',
                title: 'CHAPITRE I - DE LA PROCEDURE D\'EXEQUATUR',
                sections: [],
                articlesIntro: 'Art. 1159-1166',
                contentIntro: ''
              },
{
                num: 'II',
                title: 'CHAPITRE II - DE LA PROCÉDURE DE L\'ARBITRAGE',
                sections: [],
                articlesIntro: 'Art. 1167-1170',
                contentIntro: ''
              }
            ],
            articlesIntro: '',
            contentIntro: ''
          },
{
            num: 'III',
            title: 'TITRE III - DES DISPOSITIONS DIVERSES',
            chapitres: [
{
                num: 'I',
                title: 'CHAPITRE I - DE L\'APPOSITION DE LA FORMULE EXÉCUTOIRE SUR LES ARRÊTS DE LA COUR COMMUNE DE JUSTICE ET D\'ARBITRAGE',
                sections: [],
                articlesIntro: 'Art. 1171',
                contentIntro: ''
              },
{
                num: 'II',
                title: 'CHAPITRE II - DES OFFRES DE PAIEMENT ET DE LA CONSIGNATION',
                sections: [],
                articlesIntro: 'Art. 1172-1177',
                contentIntro: ''
              },
{
                num: 'III',
                title: 'CHAPITRE III - DES VOIES À PRENDRE POUR AVOIR EXPÉDITION OU COPIE D\'UN ACTE OU POUR LE FAIRE REFORMER',
                sections: [],
                articlesIntro: 'Art. 1178-1198',
                contentIntro: ''
              },
{
                num: 'IV',
                title: 'CHAPITRE IV - DE LA RECONSTITUTION DES ACTES DÉTRUITS',
                sections: [],
                articlesIntro: 'Art. 1199-1203',
                contentIntro: ''
              },
{
                num: 'V',
                title: 'CHAPITRE V - DES RÉCEPTIONS DE CAUTIONNEMENT',
                sections: [],
                articlesIntro: 'Art. 1204-1205',
                contentIntro: ''
              },
{
                num: 'VI',
                title: 'CHAPITRE VI - DES REDDITIONS DE COMPTES',
                sections: [],
                articlesIntro: 'Art. 1206-1221',
                contentIntro: ''
              },
{
                num: 'VII',
                title: 'CHAPITRE VII - DES BIENS INSAISISSABLES',
                sections: [],
                articlesIntro: 'Art. 1222-1223',
                contentIntro: ''
              },
{
                num: 'VIII',
                title: 'CHAPITRE VIII - DES PROCEDURES SIMPLIFIEES DE RECOUVREMENT',
                sections: [],
                articlesIntro: 'Art. 1224',
                contentIntro: ''
              },
{
                num: 'IX',
                title: 'CHAPITRE IX - DE LA SUSPENSION DES DELAIS DE SAISINE, DE PRESCRIPTION, DE PEREMPTION D\'INSTANCE, D\'EXERCICE DES VOIES DE RECOURS ET DES VOIES D\'EXECUTION EN CAS DE CESSATION CONCERTEE DU TRAVAIL',
                sections: [],
                articlesIntro: 'Art. 1225-1226',
                contentIntro: ''
              }
            ],
            articlesIntro: '',
            contentIntro: ''
          },
{
            num: 'IV',
            title: 'TITRE IV - DES DISPOSITIONS TRANSITOIRES ET DIVERSES',
            chapitres: [],
            articlesIntro: 'Art. 1227-1231',
            contentIntro: ''
          }
        ]
      }
    ]);

  const [copied, setCopied] = useState(false);
  const [zipGenerated, setZipGenerated] = useState(false);
  const [expanded, setExpanded] = useState({
    livre: {0: true},
    titre: {'0-0': true},
    chapitre: {'0-0-0': true},
    section: {},
    subsection: {}
  });

  const toggle = (type, key) => {
    setExpanded(prev => ({...prev, [type]: {...prev[type], [key]: !prev[type][key]}}));
  };

  const sanitize = (name) => name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9-_]/g, '-').replace(/-+/g, '-').substring(0, 50);
  const romanToArabic = (r) => ({'I':1,'II':2,'III':3,'IV':4,'V':5,'VI':6,'VII':7,'VIII':8,'IX':9,'X':10,'PREMIER':1,'DEUXIÈME':2,'DEUXIEME':2,'TROISIÈME':3,'TROISIEME':3}[r] || r);

  const updateField = (path, field, value) => {
    const u = JSON.parse(JSON.stringify(livres));
    let obj = u;
    for (let i = 0; i < path.length; i++) { obj = obj[path[i]]; }
    obj[field] = value;
    setLivres(u);
  };

  const stats = useMemo(() => {
    let sec = 0, ss = 0, para = 0;
    livres.forEach(l => l.titres.forEach(t => t.chapitres.forEach(c => {
      sec += c.sections.length;
      c.sections.forEach(s => {
        ss += s.subsections.length;
        s.subsections.forEach(sub => { para += sub.paragraphes.length; });
      });
    })));
    return { sec, ss, para };
  }, [livres]);

  const generateSkillMd = () => {
    let nav = '';
    livres.forEach((livre) => {
      nav += `\n## 📖 ${livre.title}\n\n`;
      livre.titres.forEach((t) => {
        nav += `### ${t.title}\n`;
        if (t.articlesIntro) nav += `*Intro: ${t.articlesIntro}*\n`;
        nav += '\n';
        t.chapitres.forEach((chap) => {
          const path = `references/livre-${romanToArabic(livre.num)}/titre-${romanToArabic(t.num)}/chapitre-${romanToArabic(chap.num)}.md`;
          nav += `- [${chap.title}](${path})`;
          if (chap.articlesIntro) nav += ` *(${chap.articlesIntro})*`;
          nav += '\n';
          chap.sections.forEach(sec => {
            nav += `  - ${sec.title}`;
            if (sec.articlesIntro) nav += ` *(${sec.articlesIntro})*`;
            nav += '\n';
            sec.subsections.forEach(ss => {
              nav += `    - ${ss.title}`;
              if (ss.articlesIntro) nav += ` *(Intro: ${ss.articlesIntro})*`;
              if (ss.articles) nav += ` *(${ss.articles})*`;
              nav += '\n';
              ss.paragraphes.forEach(p => {
                nav += `      - ${p.title}`;
                if (p.articles) nav += ` *(${p.articles})*`;
                nav += '\n';
              });
            });
          });
        });
        nav += '\n';
      });
    });
    return `---\nname: "${sanitize(skillName)}"\ndescription: "${skillDescription}"\n---\n\n# ${skillName}\n${nav}\n## Instructions\n\n${mainInstructions}\n`;
  };

  const generateChapitreContent = (livre, t, chap) => {
    let c = `# ${livre.title}\n## ${t.title}\n### ${chap.title}\n\n`;
    if (chap.articlesIntro) {
      c += `## Dispositions générales\n\n**Articles:** ${chap.articlesIntro}\n\n${chap.contentIntro || '[À compléter]'}\n\n---\n\n`;
    }
    chap.sections.forEach(sec => {
      c += `## ${sec.title}\n\n`;
      if (sec.articlesIntro) c += `**Articles:** ${sec.articlesIntro}\n\n`;
      if (sec.content) c += sec.content + '\n\n';
      sec.subsections.forEach(ss => {
        c += `### ${ss.title}\n\n`;
        // Articles intro de la sous-section (avant les paragraphes)
        if (ss.articlesIntro) {
          c += `**Articles intro:** ${ss.articlesIntro}\n\n`;
          c += (ss.contentIntro || '[À compléter]') + '\n\n';
        }
        // Articles de la sous-section (si pas de paragraphes)
        if (ss.articles && !ss.articlesIntro) {
          c += `**Articles:** ${ss.articles}\n\n`;
          c += (ss.content || '[À compléter]') + '\n\n';
        }
        ss.paragraphes.forEach(p => {
          c += `#### ${p.title}\n\n`;
          if (p.articles) c += `**Articles:** ${p.articles}\n\n`;
          c += (p.content || '[À compléter]') + '\n\n';
        });
      });
      if (sec.subsections.length === 0 && !sec.content) c += '[À compléter]\n\n';
      c += '---\n\n';
    });
    if (chap.sections.length === 0) c += (chap.contentIntro || '[À compléter]') + '\n';
    return c;
  };

  const downloadZip = () => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
    script.onload = () => {
      const zip = new window.JSZip();
      const fn = sanitize(skillName);
      zip.file(`${fn}/SKILL.md`, generateSkillMd());
      livres.forEach((livre) => {
        const ln = romanToArabic(livre.num);
        livre.titres.forEach((t) => {
          const tn = romanToArabic(t.num);
          if (t.articlesIntro) {
            zip.file(`${fn}/references/livre-${ln}/titre-${tn}/00-intro.md`, 
              `# ${t.title}\n\n**${t.articlesIntro}**\n\n${t.contentIntro || '[À compléter]'}\n`);
          }
          t.chapitres.forEach((chap) => {
            const cn = romanToArabic(chap.num);
            zip.file(`${fn}/references/livre-${ln}/titre-${tn}/chapitre-${cn}.md`, generateChapitreContent(livre, t, chap));
          });
        });
      });
      zip.generateAsync({type:'blob'}).then(content => {
        const url = URL.createObjectURL(content);
        const a = document.createElement('a'); a.href = url; a.download = `${fn}.zip`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setZipGenerated(true); setTimeout(() => setZipGenerated(false), 3000);
      });
    };
    document.body.appendChild(script);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900 p-2">
      <div className="max-w-7xl mx-auto">
        <div className="mb-2 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-white flex items-center gap-2">
              <Scale size={18} className="text-blue-400" />
              CPC Bénin v12 - Structure Complète
            </h1>
            <p className="text-slate-400 text-xs">{stats.sec} Sections • {stats.ss} Sous-sections • {stats.para} Paragraphes</p>
          </div>
          <button onClick={() => window.confirm('Reset?') && window.location.reload()} className="p-1 rounded bg-slate-700 text-slate-300">
            <RotateCcw size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="lg:col-span-2 space-y-2">
            <div className="bg-slate-800 rounded p-2 border border-slate-700">
              <input type="text" value={skillName} onChange={e => setSkillName(e.target.value)} 
                className="w-full px-2 py-1 mb-1 bg-slate-700 border border-slate-600 rounded text-white text-sm" />
              <textarea value={mainInstructions} onChange={e => setMainInstructions(e.target.value)} 
                rows="2" className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs font-mono" />
            </div>

            <div className="bg-slate-800 rounded p-2 border border-slate-700">
              <h2 className="text-sm font-bold text-white mb-1 flex items-center gap-1">
                <Book size={14} className="text-blue-400" /> Structure du Code
              </h2>
              <div className="space-y-1 max-h-[500px] overflow-y-auto pr-1 text-xs">
                {livres.map((livre, li) => (
                  <div key={li} className="border border-slate-600 rounded">
                    <div className="flex items-center p-1.5 bg-blue-900/40 cursor-pointer" onClick={() => toggle('livre', li)}>
                      {expanded.livre[li] ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                      <span className="text-white ml-1 font-medium">📖 {livre.title}</span>
                    </div>
                    {expanded.livre[li] && (
                      <div className="p-1 space-y-1">
                        {livre.titres.map((t, ti) => (
                          <div key={ti} className="border border-slate-600 rounded ml-2">
                            <div className="flex items-center p-1.5 bg-indigo-900/40 cursor-pointer" onClick={() => toggle('titre', `${li}-${ti}`)}>
                              {expanded.titre[`${li}-${ti}`] ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                              <span className="text-indigo-200 ml-1">📁 {t.title}</span>
                              {t.articlesIntro && <span className="text-yellow-400 ml-1">({t.articlesIntro})</span>}
                            </div>
                            {expanded.titre[`${li}-${ti}`] && (
                              <div className="p-1 space-y-1">
                                {t.articlesIntro && (
                                  <div className="bg-yellow-900/20 border border-yellow-700/50 rounded p-1.5 ml-2">
                                    <span className="text-yellow-400 text-xs font-medium">Intro Titre: {t.articlesIntro}</span>
                                    <textarea value={t.contentIntro || ''} 
                                      onChange={e => updateField([li, 'titres', ti], 'contentIntro', e.target.value)}
                                      rows="2" className="w-full mt-1 px-1 bg-slate-700 border border-slate-600 rounded text-white text-xs" 
                                      placeholder="Contenu intro titre..." />
                                  </div>
                                )}
                                {t.chapitres.map((chap, ci) => (
                                  <div key={ci} className="border border-slate-600 rounded ml-2">
                                    <div className="flex items-center p-1.5 bg-green-900/30 cursor-pointer" onClick={() => toggle('chapitre', `${li}-${ti}-${ci}`)}>
                                      {expanded.chapitre[`${li}-${ti}-${ci}`] ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                                      <span className="text-green-300 ml-1">📄 {chap.title}</span>
                                      {chap.articlesIntro && <span className="text-orange-400 ml-1">[{chap.articlesIntro}]</span>}
                                      <span className="text-slate-500 ml-auto">[{chap.sections.length} sec]</span>
                                    </div>
                                    {expanded.chapitre[`${li}-${ti}-${ci}`] && (
                                      <div className="p-1.5 bg-slate-900/50 space-y-1">
                                        {chap.articlesIntro && (
                                          <div className="bg-orange-900/20 border border-orange-700/50 rounded p-1.5">
                                            <span className="text-orange-400 font-medium">Intro: {chap.articlesIntro}</span>
                                            <textarea value={chap.contentIntro || ''} 
                                              onChange={e => updateField([li, 'titres', ti, 'chapitres', ci], 'contentIntro', e.target.value)}
                                              rows="3" className="w-full mt-1 px-1 bg-slate-700 border border-slate-600 rounded text-white text-xs" />
                                          </div>
                                        )}
                                        {chap.sections.length === 0 && !chap.articlesIntro && (
                                          <textarea value={chap.contentIntro || ''} 
                                            onChange={e => updateField([li, 'titres', ti, 'chapitres', ci], 'contentIntro', e.target.value)}
                                            rows="3" className="w-full px-1 bg-slate-700 border border-slate-600 rounded text-white text-xs" 
                                            placeholder="Contenu du chapitre..." />
                                        )}
                                        {chap.sections.map((sec, si) => (
                                          <div key={si} className="border border-cyan-800/50 rounded p-1.5 ml-1">
                                            <div className="flex items-center cursor-pointer" onClick={() => toggle('section', `${li}-${ti}-${ci}-${si}`)}>
                                              {expanded.section[`${li}-${ti}-${ci}-${si}`] ? <ChevronDown size={12} className="text-cyan-400" /> : <ChevronRight size={12} className="text-cyan-400" />}
                                              <span className="text-cyan-300 ml-1">{sec.title}</span>
                                              {sec.articlesIntro && <span className="text-teal-400 ml-1">({sec.articlesIntro})</span>}
                                              {sec.subsections.length > 0 && <span className="text-purple-400 ml-auto">[{sec.subsections.length} ss]</span>}
                                            </div>
                                            {expanded.section[`${li}-${ti}-${ci}-${si}`] && (
                                              <div className="mt-1.5 pl-3 space-y-1.5">
                                                {sec.subsections.length === 0 && (
                                                  <textarea value={sec.content || ''} 
                                                    onChange={e => updateField([li, 'titres', ti, 'chapitres', ci, 'sections', si], 'content', e.target.value)}
                                                    rows="3" className="w-full px-1 bg-slate-700 border border-slate-600 rounded text-white text-xs" 
                                                    placeholder="Contenu section..." />
                                                )}
                                                {sec.subsections.map((ss, ssi) => (
                                                  <div key={ssi} className="bg-purple-900/20 border border-purple-700/50 rounded p-1.5">
                                                    <div className="flex items-center cursor-pointer" onClick={() => toggle('subsection', `${li}-${ti}-${ci}-${si}-${ssi}`)}>
                                                      {expanded.subsection[`${li}-${ti}-${ci}-${si}-${ssi}`] ? <ChevronDown size={10} className="text-purple-400" /> : <ChevronRight size={10} className="text-purple-400" />}
                                                      <span className="text-purple-300 ml-1">{ss.title}</span>
                                                      {ss.articlesIntro && <span className="text-amber-400 ml-1">[Intro: {ss.articlesIntro}]</span>}
                                                      {ss.articles && <span className="text-slate-400 ml-1">({ss.articles})</span>}
                                                      {ss.paragraphes.length > 0 && <span className="text-pink-400 ml-auto">[{ss.paragraphes.length} ¶]</span>}
                                                    </div>
                                                    {expanded.subsection[`${li}-${ti}-${ci}-${si}-${ssi}`] && (
                                                      <div className="mt-1.5 pl-3 space-y-1.5">
                                                        {/* Intro de la sous-section (si elle a des paragraphes) */}
                                                        {ss.articlesIntro && ss.paragraphes.length > 0 && (
                                                          <div className="bg-amber-900/20 border border-amber-700/50 rounded p-1.5">
                                                            <span className="text-amber-400 font-medium">Intro: {ss.articlesIntro}</span>
                                                            <textarea value={ss.contentIntro || ''} 
                                                              onChange={e => updateField([li, 'titres', ti, 'chapitres', ci, 'sections', si, 'subsections', ssi], 'contentIntro', e.target.value)}
                                                              rows="3" className="w-full mt-1 px-1 bg-slate-700 border border-slate-600 rounded text-white text-xs" 
                                                              placeholder="Contenu intro sous-section..." />
                                                          </div>
                                                        )}
                                                        {/* Contenu direct si pas de paragraphes */}
                                                        {ss.paragraphes.length === 0 && (
                                                          <textarea value={ss.content || ''} 
                                                            onChange={e => updateField([li, 'titres', ti, 'chapitres', ci, 'sections', si, 'subsections', ssi], 'content', e.target.value)}
                                                            rows="3" className="w-full px-1 bg-slate-700 border border-slate-600 rounded text-white text-xs" 
                                                            placeholder="Contenu sous-section..." />
                                                        )}
                                                        {ss.paragraphes.map((p, pi) => (
                                                          <div key={pi} className="bg-pink-900/20 border border-pink-700/50 rounded p-1.5">
                                                            <div className="text-pink-300 font-medium">{p.title}</div>
                                                            {p.articles && <div className="text-slate-400 text-xs">({p.articles})</div>}
                                                            <textarea value={p.content || ''} 
                                                              onChange={e => updateField([li, 'titres', ti, 'chapitres', ci, 'sections', si, 'subsections', ssi, 'paragraphes', pi], 'content', e.target.value)}
                                                              rows="3" className="w-full mt-1 px-1 bg-slate-700 border border-slate-600 rounded text-white text-xs" 
                                                              placeholder="Contenu paragraphe..." />
                                                          </div>
                                                        ))}
                                                      </div>
                                                    )}
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="bg-slate-800 rounded p-2 border border-slate-700">
              <h3 className="text-sm font-bold text-white mb-1">Aperçu SKILL.md</h3>
              <div className="bg-slate-900 rounded p-1.5 max-h-40 overflow-y-auto border border-slate-700">
                <pre className="text-slate-300 text-xs whitespace-pre-wrap font-mono">{generateSkillMd().substring(0, 1500)}...</pre>
              </div>
              <button onClick={() => { navigator.clipboard.writeText(generateSkillMd()); setCopied(true); setTimeout(() => setCopied(false), 2000); }} 
                className="w-full mt-1.5 px-2 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs flex items-center justify-center gap-1">
                <Copy size={12} /> {copied ? '✓ Copié!' : 'Copier SKILL.md'}
              </button>
            </div>

            <button onClick={downloadZip} className="w-full px-4 py-2.5 rounded font-medium bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2">
              <Download size={16} /> {zipGenerated ? '✓ Téléchargé!' : 'Télécharger ZIP'}
            </button>

            <div className="bg-slate-800/50 rounded p-2 border border-slate-700">
              <h4 className="text-xs font-bold text-white mb-1">📋 Légende</h4>
              <div className="grid grid-cols-2 gap-1 text-xs">
                <div><span className="text-yellow-400">●</span> Intro Titre</div>
                <div><span className="text-orange-400">●</span> Intro Chapitre</div>
                <div><span className="text-cyan-400">●</span> Section</div>
                <div><span className="text-purple-400">●</span> Sous-section</div>
                <div><span className="text-amber-400">●</span> Intro Ss-sec</div>
                <div><span className="text-pink-400">●</span> Paragraphe</div>
              </div>
            </div>

            <div className="bg-indigo-900/20 rounded p-2 border border-indigo-700/50">
              <h4 className="text-xs font-bold text-indigo-300 mb-1">📊 Statistiques</h4>
              <div className="grid grid-cols-3 gap-1 text-xs text-center">
                <div className="bg-slate-800 rounded p-1">
                  <div className="font-bold text-blue-400">{livres.length}</div>
                  <div className="text-slate-500">Livres</div>
                </div>
                <div className="bg-slate-800 rounded p-1">
                  <div className="font-bold text-indigo-400">{livres.reduce((a,l)=>a+l.titres.length,0)}</div>
                  <div className="text-slate-500">Titres</div>
                </div>
                <div className="bg-slate-800 rounded p-1">
                  <div className="font-bold text-green-400">{livres.reduce((a,l)=>a+l.titres.reduce((b,t)=>b+t.chapitres.length,0),0)}</div>
                  <div className="text-slate-500">Chapitres</div>
                </div>
                <div className="bg-slate-800 rounded p-1">
                  <div className="font-bold text-cyan-400">{stats.sec}</div>
                  <div className="text-slate-500">Sections</div>
                </div>
                <div className="bg-slate-800 rounded p-1">
                  <div className="font-bold text-purple-400">{stats.ss}</div>
                  <div className="text-slate-500">Ss-sec</div>
                </div>
                <div className="bg-slate-800 rounded p-1">
                  <div className="font-bold text-pink-400">{stats.para}</div>
                  <div className="text-slate-500">Parag.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

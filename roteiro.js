alert(`Olá! Temos opções de roteiros para:
1 - São Paulo
2 - Las Vegas
3 - Moscou.`);

var roteiro = prompt("Qual deseja consultar?");

switch(roteiro){
case "1":
alert(`| São Paulo |
Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes
e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios
para aqueles que passam pela capital paulista.

Roteiro A - Avenida Paulista
Roteiro B - Centro
Roteiro C - Vila Madalena.`);

                        var rotselec = prompt ("Qual deseja consultar?");

                        switch (rotselec){
                            case "a":
                                alert(`| Avenida Paulista |
                                    - MASP;
                                    - Parque Trianon;
                                    - Rua Augusta.`);
                        
                            break;


                        case "b":
                                alert(`| Centro |
                                - Catedral da Sé;
                                - Pátio do Colégio;
                                - Rua Augusta.`);
                        
                            break;


                        case "c":
                                alert(`| Vila Madalena |
                                - Beco do Batman;
                                - Feirinha da Benedito Calixto;
                                - Livraria da Vila.`);
                        
                            break;

                        default: alert("Opção inválida.");
                    }
break;

case "2":
alert(`| Las Vegas | 
A cidade mais populosa e mais densamente povoada do estado de Nevada,
Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente,
desde 1911 e conta com mais de meio milhão de habitantes.

Conheça a capital dos jogos de azar com esses roteiros:

Roteiro A - Downtown
Roteiro B - Las Vegas Boulevard North
Roteiro C - Las Vegas Boulevard South.`);

                    var rotselec = prompt ("Qual deseja consultar?");

                        switch (rotselec){
                            case "a":
                                alert(`| Downtown |
                                - Fremont;
                                - Las Vegas Art Museum;
                                - Museu nacional do Crime Organizado.`);
                        
                            break;


                        case "b":
                            alert(`| Las Vegas Boulevard North |
                                - Outlet Premium North;
                                - Stratosphere;
                                - Apple Fashion Show.`);
                        
                            break;


                        case "c":
                            alert(`| Las Vegas Boulevard South |
                            - Fonte do Bellagio;
                            - Principais Cassinos;
                            - Madame Tussauds.`);
                        
                            break;

                        default: alert("Opção inválida.");
                    }
break;

case "3":
alert(`| Moscou |
A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade
mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética.

Opções de roteiros para a capital Russa:

Roteiro A - Centro
Roteiro B - Obras pela cidade
Roteiro C - Praça Vermelha.`);

                    var rotselec = prompt ("Qual deseja consultar?");

                        switch (rotselec){
                            case "a":
                                alert(`| Centro |
                                - Teatro Bolshoi;
                                - Monumento a Karl Marx;
                                - Rio Moscou.`);
                        
                            break;


                        case "b":
                            alert(`| Obras pela cidade |
                            - Metrô de Moscou;
                            - As Sete Irmãs;
                            - Moscow Leningradsky Railway Station.`);
                        
                            break;


                        case "c":
                            alert(`| Praça Vermelha |
                            - Museu Histórico do Estado;
                            - Catedral de São Basílico;
                            - Mausoléu de Lênin.`);
                        
                            break;

                        default: alert("Opção inválida.");
                    }
break;

default: alert("Opção inválida.");
}
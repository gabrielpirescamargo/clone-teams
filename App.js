import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import { tintColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';




export default function App() {
  return (
    <View>
      <View style={styles.header}>
          <View style={styles.perfilhorizontal}>
          <Image style={styles.perfil} source={require('./assets/perfil.png')}/>
          <Text style={styles.feed}>Feed</Text>
          </View>
          <View style={styles.pesquisar}>
            <Image style={styles.lupa} source={require('./assets/search.png')}/>
            <Text style={styles.pesquisarTexto}>Pesquisar</Text>
          </View>
         
          
      </View>
      <ScrollView style={styles.body}>
        
      <View>
            <View style={styles.mensagem}>
              <View style={styles.horizontal}>
                <Image style={styles.imagem} source={require('./assets/atividade.png')}/>
                  <View style={styles.vertical}>
                    <Text style={styles.titulo}>Atribuição retornada</Text>
                    <Text style={styles.desc}>B.D.-3A-T-AMS P-TECH DESENVOLVIMENTO DE...</Text>
                    <Text style={styles.desc2}>Linguagem de consulta SQL</Text>
                  </View>
              </View>
            </View>

            <View style={styles.mensagem}>
              <View style={styles.horizontal}>
                <Image style={styles.imagem} source={require('./assets/atividade.png')}/>
                  <View style={styles.vertical}>
                    <Text style={styles.titulo}>Atribuição retornada</Text>
                    <Text style={styles.desc}>E.D.F.-3A-T-AMS P-TECH DESENVOLVIMENTO DE...</Text>
                    <Text style={styles.desc2}>Educação Física 2ª atividade avaliativa 4ºBimestre</Text>
                  </View>
              </View>
            </View>

            <View style={styles.mensagem}>
              <View style={styles.horizontal}>
                <Image style={styles.imagem} source={require('./assets/atividade.png')}/>
                  <View style={styles.vertical}>
                    <Text style={styles.titulo}>Atribuição retornada</Text>
                    <Text style={styles.desc}>B.D.-3A-T-AMS P-TECH DESENVOLVIMENTO DE...</Text>
                    <Text style={styles.desc2}>Banco de dados vacinação Covid-19</Text>
                  </View>
              </View>
            </View>

            <View style={styles.mensagem}>
              <View style={styles.horizontal}>
                <Image style={styles.imagem} source={require('./assets/atividade.png')}/>
                  <View style={styles.vertical}>
                    <Text style={styles.titulo}>Atribuição retornada</Text>
                    <Text style={styles.desc}>MAT.-3A-T-AMS P-TECH DESENVOLVIMENTO DE...</Text>
                    <Text style={styles.desc2}>Lista de exercícios sobre Estatística</Text>
                  </View>
              </View>
            </View>

            <View style={styles.mensagem}>
              <View style={styles.horizontal}>
                <Image style={styles.imagem} source={require('./assets/atividade.png')}/>
                  <View style={styles.vertical}>
                    <Text style={styles.titulo}>Atribuição retornada</Text>
                    <Text style={styles.desc}>B.D.-3A-T-AMS P-TECH DESENVOLVIMENTO DE...</Text>
                    <Text style={styles.desc2}>Linguagem de consulta SQL</Text>
                  </View>
              </View>
            </View>

            <View style={styles.mensagem}>
              <View style={styles.horizontal}>
                <Image style={styles.imagem} source={require('./assets/atividade.png')}/>
                  <View style={styles.vertical}>
                    <Text style={styles.titulo}>Atribuição retornada</Text>
                    <Text style={styles.desc}>Q.T.S.-3A-T-AMS P-TECH DESENVOLVIMENTO DE...</Text>
                    <Text style={styles.desc2}>Pesquisa e Apresentação Escrita</Text>
                  </View>
              </View>
            </View>

            <View style={styles.mensagem}>
              <View style={styles.horizontal}>
                <Image style={styles.imagem} source={require('./assets/atividade.png')}/>
                  <View style={styles.vertical}>
                    <Text style={styles.titulo}>Atribuição retornada</Text>
                    <Text style={styles.desc}>I.P.S.S.I-3A-T-AMS P-TECH DESENVOLVIMENTO ...</Text>
                    <Text style={styles.desc2}>Atividade Prática - Criptografia</Text>
                  </View>
              </View>
            </View>

            <View style={styles.mensagem}>
              <View style={styles.horizontal}>
                <Image style={styles.imagem} source={require('./assets/atividade.png')}/>
                  <View style={styles.vertical}>
                    <Text style={styles.titulo}>Atribuição retornada</Text>
                    <Text style={styles.desc}>P.W.-3A-T-AMS P-TECH DESENVOLVIMENTO DE...</Text>
                    <Text style={styles.desc2}>Programação Web III - Atividade prática individual!</Text>
                  </View>
              </View>
            </View>

            <View style={styles.mensagem}>
              <View style={styles.horizontal}>
                <Image style={styles.imagem} source={require('./assets/atividade.png')}/>
                  <View style={styles.vertical}>
                    <Text style={styles.titulo}>Atribuição retornada</Text>
                    <Text style={styles.desc}>SOC.-3A-T-AMS P-TECH DESENVOLVIMENTO DE...</Text>
                    <Text style={styles.desc2}>DIREITOS HUMANOS</Text>
                  </View>
              </View>
            </View>

            <View style={styles.mensagem}>
              <View style={styles.horizontal}>
                <Image style={styles.imagem} source={require('./assets/atividade.png')}/>
                  <View style={styles.vertical}>
                    <Text style={styles.titulo}>Atribuição retornada</Text>
                    <Text style={styles.desc}>GEO.-3A-T-AMS P-TECH DESENVOLVIMENTO DE...</Text>
                    <Text style={styles.desc2}>Separatismo e disputa por fronteiras Pesquisa</Text>
                  </View>
              </View>
            </View>

            <View style={styles.mensagem}>
              <View style={styles.horizontal}>
                <Image style={styles.imagem} source={require('./assets/atividade.png')}/>
                  <View style={styles.vertical}>
                    <Text style={styles.titulo}>Atribuição retornada</Text>
                    <Text style={styles.desc}>L.E.M.I.C.P.-3A-T-AMS P-TECH DESENVOLVIMENT...</Text>
                    <Text style={styles.desc2}>ENTREPRENEURS Texto e Interpretação</Text>
                  </View>
              </View>
            </View>

            <View style={styles.mensagem}>
              <View style={styles.horizontal}>
                <Image style={styles.imagem} source={require('./assets/atividade.png')}/>
                  <View style={styles.vertical}>
                    <Text style={styles.titulo}>Atribuição retornada</Text>
                    <Text style={styles.desc}>L.E.M.I.C.P-3A-T-AMS P-TECH DESENVOLVIMENT...</Text>
                    <Text style={styles.desc2}>NUMBERS-There is - There are - How many</Text>
                  </View>
              </View>
            </View>

            <View style={styles.mensagem}>
              <View style={styles.horizontal}>
                <Image style={styles.imagem} source={require('./assets/atividade.png')}/>
                  <View style={styles.vertical}>
                    <Text style={styles.titulo}>Atribuição retornada</Text>
                    <Text style={styles.desc}>P.W-3A-T-AMS P-TECH DESENVOLVIMENTO DE...</Text>
                    <Text style={styles.desc2}>Programação Web III - Atividade prática !</Text>
                  </View>
              </View>
            </View>

            <View style={styles.mensagem}>
              <View style={styles.horizontal}>
                <Image style={styles.imagem} source={require('./assets/atividade.png')}/>
                  <View style={styles.vertical}>
                    <Text style={styles.titulo}>Atribuição retornada</Text>
                    <Text style={styles.desc}>MAT.-3A-T-AMS P-TECH DESENVOLVIMENTO DE...</Text>
                    <Text style={styles.desc2}>Avaliação escrita sobre Números Complexos</Text>
                  </View>
              </View>
            </View>

            <View style={styles.mensagem}>
              <View style={styles.horizontal}>
                <Image style={styles.imagem} source={require('./assets/atividade.png')}/>
                  <View style={styles.vertical}>
                    <Text style={styles.titulo}>Atribuição retornada</Text>
                    <Text style={styles.desc}>E.F.-3A-T-AMS P-TECH DESENVOLVIMENTO DE...</Text>
                    <Text style={styles.desc2}>Educação Física - Sistema Esquelético - 3º Bim - Setembro</Text>
                  </View>
              </View>
            </View>

         

      </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.iconevertical}>
          <Image style={styles.iconeselecionado} source={require('./assets/sino.png')}/>
          <Text style={styles.footerdescselecionado}>Atividade</Text>
        </View>
        <View style={styles.iconevertical}>
          <Image style={styles.iconefooter} source={require('./assets/calendario.png')}/>
          <Text style={styles.footerdesc}>Calendário</Text>
        </View>
        <View style={styles.iconevertical}>
          <Image style={styles.iconefooter} source={require('./assets/equipe.png')}/>
          <Text style={styles.footerdesc}>Equipes</Text>
        </View>
        <View style={styles.iconevertical}>
          <Image style={styles.iconefooter} source={require('./assets/tarefas.png')}/>
          <Text style={styles.footerdesc}>Trabalhos</Text>
        </View>
        <View style={styles.iconevertical}>
          <Image style={styles.iconefooter} source={require('./assets/mais.png')}/>
          <Text style={styles.footerdesc}>Mais</Text>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  desc2:{
    fontSize:10,
    color:'#b3b3b3'
  },
  perfilhorizontal:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:50
    
  },
  feed:{
    color:'white',
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 10
  },
  lupa:{
    width:20,
    height:20,
    marginLeft:10,
    tintColor: '#9b9b9b' 
  },
  pesquisarTexto:{
    color:'#9b9b9b',
    marginLeft:5
  },
  iconevertical:{
    alignItems:'center',
    justifyContent:'center',
    width:70
  },
  footerdesc:{
    paddingTop:3,
    fontSize:12,
    color:'#b3b3b3',
    fontSize:10
  },
  footerdescselecionado:{
    paddingTop:3,
    fontSize:12,
    color:'#7f85f5',
    fontSize:10
  },
  desc:{
    paddingTop:3,
    fontSize:14,
    color:'#b3b3b3'
  },

  titulo:{
    fontSize:14,
  
    color:'white'
  },
  horizontal:{
    flexDirection: "row",
    flexWrap: "wrap",
  },
  vertical:{
    flexDirection: "column",
    flexWrap: "wrap",
    paddingTop:15,
    paddingLeft:10,
    width:'85%',
    borderBottomWidth: 1,
    borderBottomColor: '#242424',
    height:75
  },
  mensagem:{
    backgroundColor: '#000000',
   
   
  },
  imagem:{
    width:50,
    height:50,               
    marginLeft:10,
    marginTop:10,
  
    
  },
  perfil:{
    width:35,
    height:35,
    marginLeft:20,
    
  
    
  },
  iconefooter:{
    width:20,
    height:20,
    tintColor: "#adadad",
  
    
  },
  iconeselecionado:{
    width:20,
    height:20,
 
    tintColor: "#7f85f5",
  
  
  },
  header: {
    backgroundColor: '#141414',
    height:'16.5%',

  },

  pesquisar: {
    flexDirection: "row",
    backgroundColor: 'black',
    backgroundColor:'#2b2b2d',
    width:'95%',
    marginLeft:10,
    height:35,
    borderRadius: 7,
    alignItems:'center',
    marginTop:15
  },

  body: {
    backgroundColor: '#000000',
   height:'74.5%',
  },

  footer: {
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#141414',
    height:'9.5%',
    paddingBottom:30,
    flexDirection: "row",
    borderTopColor: '#232323',
    borderTopWidth:1

  },
  fonte:{
  color:'white',


  marginLeft:10,
  flex:1,

  },
});

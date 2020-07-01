# Boat - Simulação de Fluidos

Neste projeto, desenvolvemos duas soluções à simulação de fluidos no Blender 2.8. A primeira utiliza sua Engine de Simulação de Fluidos, obtendo resultados mais fiéis e elaborados, por conta da simulação física, mas muito mais rígidos e de alto custo computacional. A segunda, por sua vez, utiliza artifícios da computação gráfica, como texturas dinâmicas, para simular tais cálculos. Embora seus resultados sejam mais ‘sintéticos’, se beneficia de workloads muito menores, possibilitando interações em tempo-real, sem necessidade de compilação do fluido.

Ambas as alternativas geraram como resultados arquivos de vídeo, renderizados no próprio Blender. Para apresentá-los de forma interativa, desenvolveu-se uma plataforma WEB, que foi, depois, convertida em um programa para Desktop Linux. Tal plataforma permite ao usuário listar e assistir os vídeos, que foram hospedados no Youtube para dispensar os arquivos locais, reduzindo o tamanho do executável resultante.
___
## Tutorial em Vídeo
https://youtu.be/Y6a876elHYo
___
## Instalação

### 1. Utilizando o programa para Linux

Na aba Releases, baixar o arquivo executável "SimulacaoFluidos.AppImage". Em seguida, basta abri-lo.
Caso não consiga abrir com duplo-clique, basta executá-lo pelo terminal:
```
sudo chmod +x SimulacaoFluidos.AppImage
./SimulacaoFluidos.AppImage
```

### 2. Hospedando um servidor Web local.
Primeiro, clone o repositório em sua máquina. Em seguida, confira se já tem o NodeJS e o NPM instalados (e os instale, se necessário). Depois, no terminal, já na pasta raiz do projeto, instalar os requisitos com 'npm install'. Ao fim do processo, basta subir o servidor com ‘npm run react-start’. A plataforma já pode ser acessada pelo navegador em ‘http://localhost:3000’.

### 3. Diretamente pelo Blender
Caso deseje analisar e modificar os cenários, é possível acessá-los diretamente pelos arquivos blender. Eles são:
* Simulação de Fluidos com Engine: /assets/aquarium.blend
* Simulação com Texturização Dinâmica: /assets/blender_water_simulation.blend

___
## Como Usar o Visualizador

A página inicial apresenta uma lista de vídeos. Ao clicar em um card, você será redirecionado a uma página com o player do Youtube e o vídeo carregado. Para voltar, basta clicar no botão flutuante verde no canto inferior direito da tela.

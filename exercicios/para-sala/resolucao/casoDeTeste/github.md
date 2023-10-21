**Caso de Teste de Ponta a Ponta para a Github**

**Título:** Navegação e Pesquisa da Github

**Objetivo:** 
1. Criar um repositório
2. Abrir uma issue
3. Deletar um repositório
4. Criar uma nova chave SSH

**Pré-condições:** 
1. Dispositivo com acesso a internet
2. Navegador atualizado
3. Usuário precisa possuir uma conta válida e estar logado 

**Passos Iniciais:** 

-  **Acesso à Página Inicial:**
   - Navegue até o site oficial do [Github](https://github.com/)
   - Realize o login na tela inicial.
   - Verifique se após o login a pagina foi atualizada com o "Dashboard" do usuário.

-  **Pesquisa por Termo:**
    - No bloco de pesquisa inserir um local de origem e um local de destino, bem como datas de "ida e volta"
    - clicar no botão "pesquisar"
-------

**Passos - 1.Criar um repositório:** 

- **Acesso à Página**
    - Selecione o meu do usuário no canto superior direito da página.
    - Navegue até a página "Your repositories"

- **Criar repositório**
    - Selecione o botão "New" para criar um novo repositório.
    - Defina um nome para o repositório
    - Selecione o botão "Create repository"
    
**Pós-condições:**
- A página deve ser atualizada como o novo repositório e sua url carregada como: "https://github.com/USUARIO/NOME-DO-REPOSITORIO"

**Critérios de Aceitação:**
- não apresenta mensagens de erro
- paginas carregam normalmente

-----------
**Passos - 2. Abrir uma issue:** 

- **Acesso à Página**
    - Navegue até a página do repositório em que a issue será criada. A url deve seguir esse exemplo: "https://github.com/USUARIO/NOME-DO-REPOSITORIO"

- **Criar issue**
    - Selecione o botão link "issues" no navbar.
    - Selecione o botão "New issue"
    - Defina um titulo e uma descrição para a issue.
    - Selecione o botão "Submit new issue"
    
**Pós-condições:**
- A página deve ser atualizada como a nova issue na tela.

**Critérios de Aceitação:**
- não apresenta mensagens de erro
- paginas carregam normalmente

---------
**Passos - 3. Deletar um repositório:** 

- **Acesso à Página**
    - Navegue até a página do repositório que será deletado. A url deve seguir esse exemplo: "https://github.com/USUARIO/NOME-DO-REPOSITORIO"

- **Deletar Repositório**
    - Selecione o link "Settings" no navbar.
    - Deslise até o final da tela e selecione o botão "Delete this repository"
    - Selecione o botão "I want to delete this repository".
    - Faça a confirmação escrevendo o nome do repositório "USUARIO/NOME-DO-REPOSITORIO"
    - Selecione o botão "Delete this repository".
    - Realize a autenticação solicitada pela página (Senha ou  Github Mobile)
    
**Pós-condições:**
- A página deve ser atualizada para a página de repósitorios com o repositório em questão deletado.

**Critérios de Aceitação:**
- não apresenta mensagens de erro
- paginas carregam normalmente

---------

**Passos - 4. Criar uma nova chave SSH:** 

- **Acesso à Página**
   - Selecione o meu do usuário no canto superior direito da página.
    - Navegue até a página "Settings"

- **Criar chave SSH**
    - No menu lateral esquerdo selecione o link "SSH and GPG keys"
    - Selecione o botão "New SSH key".
    - Defina o titulo da chave SSH.
    - Selecione o botão "Add SSH key".
    
**Pós-condições:**
- A página deve ser atualizada para a página inicial.

**Critérios de Aceitação:**
- não apresenta mensagens de erro
- paginas carregam normalmente

---------
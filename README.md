# CommitGenius

## Installation
```bash
npm install -g commitgenius
```

## Command line usage
To get the comments for the current repo, run the command :
```bash
commitgenius
```

To get the comments for another repo, run the command :
```bash
commitgenius --repo "user/projets/repo-name/"
```

## OpenAI - environment variable

To run this tool, you need to set your OpenAI key in your envirnment variables. 

You can get a new one here : https://platform.openai.com/account/api-keys

### macOS and Linux
```bash
export OPENAI_API_KEY="<your_api_key>"
```

### Windows
```powershell
setx OPENAI_API_KEY "<your_api_key>"
```

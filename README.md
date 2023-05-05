# CommitGenius

Powered by GPT-4, `CommitGenius` analyzes the changes in your repository and generates a summary in either a funny or professional tone, as per your preference.

## Installation

```bash
npm install -g commitgenius
```

## Usage

### ✍️ simple command
To generate the git comments for the current repo, run the command :

```bash
commitgenius
```

🖨️ output example :
```
feat(cli): Add mood option for generating funny or professional commit messages

- Update settings.json for vscode
- Modify explanations on Installation and Command line usage in README.md
- Add mood option in index.ts and Args.d.ts for mood choice between pro and funny
- Update instructions in the PromptGenerator.ts based on the mood provided
```

### ✍️ mood-based command
You can also choose the mood of the comments by passing the `--mood` flag (funny or pro), by default `pro` is used :

```bash
commitgenius --mood funny
```

🖨️ output example :
```
feat(cli): ✨ Add mood-based commit messages 🎭🚀

Introducing mood-based commit messages! Choose between funny or professional
commit messages with a simple option flag.

- Updated .vscode/settings.json to include new words for spell checker
- Modified `README.md` to properly describe the usage of commitgenius
- Enhanced `PromptGenerator.ts` to create messages according to the mood flag
- Added mood option in `index.ts` for CLI usage
- Updated `Args.d.ts` to include the mood property for better typing

Now, prepare yourself for some hilarious git commits or keep it classy with
pure professionalism! The choice is yours. Enjoy! 😄
```

### ✍️ repo-based command
To generate the git comments for another repo, run the command :

```bash
commitgenius --repo "user/projects/repo-name/"
```

## OpenAI - environment variable

To run this tool, you need to set your OpenAI key in your environment variables.

You can get a new one here : https://platform.openai.com/account/api-keys

![api-key](https://user-images.githubusercontent.com/670586/236320373-df982409-9d12-4aef-90e1-d59409a12338.png)

### macOS and Linux

```bash
export OPENAI_API_KEY="<your_api_key>"
```

### Windows

```powershell
setx OPENAI_API_KEY "<your_api_key>"
```

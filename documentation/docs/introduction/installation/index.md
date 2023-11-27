---
sidebar_position: 1
---

# Creating project

## GitHub Interface

For creating project you can use [sps-lite](https://github.com/singlepagestartup/sps-lite) template by GitHub interface. Press **Use this template** and select one of variants: **Create a new repository** or **Open in codespace**.

![Use this template](./img/use-this-template.png)

## CLI command

You can also create an empty repository and then download it locally to the root of the repository and execute several CLI commands.

This command connects the `sps-lite` repository as the parent to your project.

```bash
git remote add upstream https://github.com/singlepagestartup/sps-lite.git
```

This command takes changes from the project that is connected as `upstream`

```bash
git pull upstream main
```

This command sends changes to your repository.

```bash
git push origin main
```

### Error: remote upstream already exists

If you get the error `remote upstream already exists` when trying to change the `remote upstream`:

```bash
git:(main) git remote add upstream https://github.com/singlepagestartup/sps.git
error: remote upstream already exists.
```

It is necessary to execute the command:

```bash
git remote rm upstream
```

After that, try to connect `remote upstream` again.

```bash
git remote add upstream https://github.com/singlepagestartup/sps.git
```

## First commit

Before the first commit, you need to set up [Husky](https://github.com/typicode/husky), otherwise an error may occur.

```bash
git commit -m "Check husky 2" \
.husky/pre-commit: line 2: .husky/\_/husky.sh: No such file or directory
```

To solve this problem, you need to call the next command in the root directory of the project:

```bash
npx husky install && npm install
```

### Error: .husky/pre-commit: line 4: lerna: command not found

When performing a commit that error may occur

```bash
...
.husky/pre-commit: line 4: lerna: command not found
husky - pre-commit hook exited with code 127 (error)
husky - command not found in PATH=/Library/Developer/CommandLineTools/usr/libexec/git-core:/Users/<your_pc_name>/.local/bin
```

To solve this problem, you need to call the next command in the root directory of the project:

```bash
npm install husky --save-dev
```

If this does not help, then you need to add a line to the `~/.bashrc` or `~/.zshrc` file

```bash
export PATH="$PATH:./node_modules/.bin"
```

### Error: hint: You have divergent branches and need to specify how to reconcile them.

If you receive the error `hint: You have divergent branches and need to specify how to reconcile them.` during `git pull`, you need to execute the command:

```bash
git config pull.rebase false
```

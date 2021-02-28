# Contribute by CODING :memo:

> inspired by [atom editor styleguides](https://github.com/atom/atom/blob/master/CONTRIBUTING.md)


## Git

> Git is the heart **beat** of a project,
> so let's not suffer from arrythmia...

### Git Commit Messages

Commits messages could be **parsed and categorized**,
you SHOULD USE **these hashtags** to help this task :

- `#docs` when editing docs
- `#syntax` when rewriting/refactoring code
- `#create` or `#add` when adding a new feature
- `#bug` when fixing a bug
- `#oops` when *you don't remember what you commit*

**You can add multiple hashtags in a single commit message,
anywhere you want in the message**

In addition, you can add **a nice looking emoji**,
but it's not so important than hashtags.
- :books: `:books: #docs`
- :memo: `:memo: #syntax`
- :heavy_plus_sign: `:heavy_plus_sign: #create`
  or `:heavy_plus_sign: #add`
- :bug: `:bug: #bug`
- :lock: `:lock: #security`
- :confounded: `:confounded: #oops`


## Actual Coding

### General Syntax

> Readability,
> simplicity and performance
> are priorized over folder size

- **2 spaces indentation** (even in HTML)

- separate code in **many little files**
  better than one
  [stodgy](https://www.dictionary.com/browse/stodgy)
  spaghetti plate.

- **break lines** as much as possible,
  in *semantically relevant* pieces of code
  (of text for markdown).
  Keep all the code under **80 chars** length please,
  and the shorter the line the better.   
  - **long URLS** will be an exception
    (unless language allows splitting and joining lines)
  - **code comments** are NOT an exception,
    use a new line
  - **HTML** is hars but let's keep under 80 chars

- SPACES NOT TABS
  because it had to be reminded


### Js syntax

The code should follow
[standardjs practices (check the link)](https://standardjs.com/rules.html).

> If you use Atom text editor,
> you can install
> **[linter-js-standard](https://atom.io/packages/linter-js-standard)**,
> for other editors, check the web.


### Maximum cross-compatibility   
Finally, (a few) rules that will help to build
both for linux, windows and mac :

- use **[node path library](https://nodejs.org/api/path.html)**
  to hande ANY path.
  Never hard-code an absolute path
  and try staying inside the **application root**

- if needed to **navigate to user path**
  (for example the user's project folder),
  use [the best library available](yet-to-find)

- avoid **native modules** as possible
  *but this [topic will have its own dedicated part](link)*

*And here are a few more
inspired by [atom guidelines](https://flight-manual.atom.io/hacking-atom/sections/cross-platform-compatibility/)*

- **file/folder names with spaces** are forbidden,
  EVEN from the user side
  (*2 exceptions :
  for imported files and project files,
  in which case refer to
  atom guidelines above*)

- `? \ / < > ? % | : " *`
  are **forbidden characters** in file/folder names

- `com1->com9 lpt1->lpt9 con nul aux prn`
  are **forbidden file names** regardless of extention
  (for example `com4.whatever` is forbidden)

- If you need to use a path for a URL
  use the **file:** protocol with an absolute path
  (*from the node path library, remember*), e.g. `file:///c|/test/pic.png`

- **don't use** `fs.stat`

- **be carefull with** `path.relative`
  as it can't traverse drives

- if **file deletion needed**
  use [rimraf](https://www.npmjs.com/package/rimraf)

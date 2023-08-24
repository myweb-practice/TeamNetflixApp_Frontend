# Netflix App Clone

# <div align="center"> "helpers" folder </div>

```
Contains reusable features for keeping code clean and readable. Also saves our time because prevents code repeating.
```

## <div align="center"> helpers/globalStyles.css </div>

### Сontains styles common to all pages

```
# Describe classes here when you are sure they will be needed in another component. (examples: ".header, .footer, .card" etc.)
```

```
# Connects like Bootstrap:
    ...
    <link rel="stylesheet" href="../helpers/globalStyles.css" />
    </head>
```

## <div align="center"> helpers/apiHelper.js </div>

### Contains reusable methods for interactions with API

```
MAKE SURE THAT METHOD YOU CREATE HERE CAN BE USED ANYWHERE!!!
```

```
# Add new method to export list

*1* apiHelper.js:
        export { yourMethod }
```

```
# Import method to your component

*1* yourComponent.html (Add type="module" when link yourComponent.js):
        ...          |
        ...          V
        <script type="module" src="./yourComponent.js"></script>
    </body>

*2* yourComponent.js:
        import { yourMethod } from "../helpers/apiHelper.js";
```

## <div align="center"> helpers/cardGen.js </div>

### Movie Cards Generation

```
MAKE SURE THAT METHOD YOU CREATE HERE CAN BE USED IN ANOTHER COMPONENT!!!
```

```
# Add new method to export list

*1* cardGen.js:
        export { yourMethod }
```

```
# Import method to your component

*1* yourComponent.html (Add type="module" when link yourComponent.js):
        ...          |
        ...          V
        <script type="module" src="./yourComponent.js"></script>
    </body>

*2* yourComponent.js:
        import { yourMethod } from "../helpers/cardGen.js";
```

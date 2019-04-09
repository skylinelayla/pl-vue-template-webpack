module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "title": {
      "type": "string",
      "required": true,
      "message": "Page Title"
    },
    "statistic": {
      "type": "string",
      "required": false,
      "message": "Statistic code"
    },
    "pathTheme": {
      "type": "string",
      "required": false,
      "message": "Theme Choose"
    },
    "pageColor": {
      "type": 'string',
      "required": false,
      "message": "Page Color"
    },
    "shareUrl": {
      "type": "string",
      "required": false,
      "message": "Share Url"
    },
    "shareContent": {
      "type": "string",
      "required": false,
      "message": "Share Content"
    },
    "shareIcon": {
      "type": "string",
      "required": false,
      "message": "Share Icon"
    },
    "shareBd": {
      "type": "string",
      "required": false,
      "message": "Share Bd"
    },
    "shareWechatAppId": {
      "type": "string",
      "required": false,
      "message": "Share Wechat App id"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "build": {
      "type": "list",
      "message": "Vue build",
      "choices": [
        {
          "name": "Runtime + Compiler: recommended for most users",
          "value": "standalone",
          "short": "standalone"
        },
        {
          "name": "Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "router": {
      "type": "confirm",
      "message": "Install vue-router?"
    },
    "lint": {
      "type": "confirm",
      "message": "Use ESLint to lint your code?"
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "message": "Pick an ESLint preset",
      "choices": [
        {
          "name": "Baidu Fecs",
          "value": "baidu",
          "short": "baidu"
        },
        {
          "name": "none (configure it yourself)",
          "value": "none",
          "short": "none"
        }
      ]
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "src/router/**/*": "router"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};

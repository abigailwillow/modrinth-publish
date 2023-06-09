# Publish to Modrinth Actions

Action to upload a project hosted on Github to Modrinth

## Inputs

| Name             | Description                                                          | Required | Default          |
| ---------------- | -------------------------------------------------------------------- | -------- | ---------------- |
| `version_name`   | The name of this version                                             | `false`  | `version_number` |
| `version_number` | The version number of this version                                   | `true`   |                  |
| `changelog`      | The changelog for this version                                       | `false`  |                  |
| `dependencies`   | A list of dependencies for this version                              | `false`  |                  |
| `game_versions`  | A list of game versions that this version supports (comma-separated) | `true`   |                  |
| `version_type`   | `release`, `beta`, or `alpha`                                        | `false`  | `release`        |
| `loaders`        | A list of mod loaders that this version supports (comma-separated)   | `true`   |                  |
| `featured`       | Whether this version should be featured                              | `false`  | `false`          |
| `status`         | `listed`, `archived`, `draft`, `unlisted`, `scheduled`, or `unknown` | `false`  | `listed`         |
| `project_id`     | The ID of the project this version is for                            | `true`   |                  |
| `file`           | The zip file to upload                                               | `true`   |                  |

## Example

```yaml

```

# Publish to Modrinth Actions

Action to upload a project hosted on Github to Modrinth

## Inputs

| Name             | Description                                                  | Required | Default          |
| ---------------- | ------------------------------------------------------------ | -------- | ---------------- |
| `version_name`   | The name of this version                                     | `false`  | `version_number` |
| `version_number` | The version number of this version, overrides `modrinth.yml` | `true`   |                  |
| `version_type`   | `release`, `beta`, or `alpha`                                | `false`  | `release`        |
| `changelog`      | The changelog for this version                               | `false`  |                  |
| `files`          | A list of ZIP files to upload, newline-delimited             | `true`   |                  |
| `sync_github`    | Whether to sync your GitHub repository with Modrinth         | `false`  | `false`          |

### Synchronization

If `sync_github` is set to `true`, the following will be synchronized with Modrinth:

- Your repository's description as Modrinth's project summary
- Your repository's README as Modrinth's project description
- Your repository's URL Modrinth's source code repository
- Your repository's issues page as Modrinth's issue tracker
- Your repository's wiki page as Modrinth's wiki page

## Example

```yaml

```

## Configuration

A `modrinth.yml` file is required in the root of the repository to configure the project, an example is shown below.

```yaml
# The ID of the project
id: AaBbCcDd
# The version of the project, ignored if version_number is set in the workflow inputs
version: 1.0.0
# A list of game versions that this project supports
game_versions:
  - 1.20
  - 1.20.1
# A list of loaders that this project supports (see list below)
loaders: 
  - fabric
  - forge
# A list of dependencies for this project, project_id is ignored if version_id is set
dependencies:
  - project_id: EeFfGgHh
    type: required
  - version_id: IiJjKkLl
    type: optional
```

### Loaders

| Name                 | Value        |
| -------------------- | ------------ |
| Bukkit               | `bukkit`     |
| BungeeCord           | `bungeecord` |
| Data Pack            | `datapack`   |
| Fabric               | `fabric`     |
| Folia                | `folia`      |
| Forge                | `forge`      |
| LiteLoader           | `liteloader` |
| Risugami's Modloader | `modloader`  |
| Paper                | `paper`      |
| Purpur               | `purpur`     |
| Quilt                | `quilt`      |
| Rift                 | `rift`       |
| Spigot               | `spigot`     |
| Sponge               | `sponge`     |
| Velocity             | `velocity`   |
| Waterfall            | `waterfall`  |

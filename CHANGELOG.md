<!--
Guiding Principles
- Changelogs are for humans, not machines.
- There should be an entry for every single version.
- The same types of changes should be grouped.
- Versions and sections should be linkable.
- The latest version comes first.
- The release date of each version is displayed.
- Mention whether you follow Semantic Versioning.

Types of changes
- Added for new features.
- Changed for changes in existing functionality.
- Deprecated for soon-to-be removed features.
- Removed for now removed features.
- Fixed for any bug fixes.
- Security in case of vulnerabilities.
- Breaking changes for break in new revision
- Other for notable changes that do not
 -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2022-05-24

### Added
- Custom type now passed to `logLevel`  
    The `LogLevel` can be calculated from the custom type that's now passed to it. This argument can be ignored if you don't require it

### Changed
- README now correctly shows `extraDetails` as optional in the example and in the information
- The README example now shows also shows off the new argument passed to `logLevel(T)`

## [1.0.0] - 2022-05-12

**This was the first release**

[1.1.0]: https://github.com/topmarksdevelopment/Javascript.Logger/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/topmarksdevelopment/Javascript.Logger/release/tag/v1.0.0
# Accelerator Log

## Options
```json
{
  "includeTap" : true,
  "projectName" : "node-express"
}
```
## Log
```
┏ engine (Chain)
┃  Info Running Chain(GeneratorValidationTransform, UniquePath)
┃ ┏ ┏ engine.transformations[0].validated (Combo)
┃ ┃ ┃  Info Combo running as Chain(Merge(merge), UniquePath(UseLast))
┃ ┃ ┃ engine.transformations[0].validated.merge (Chain)
┃ ┃ ┃  Info Running Chain(Merge, UniquePath)
┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0] (Merge)
┃ ┃ ┃ ┃  Info Running Merge(Combo, Combo, Combo, Combo, Combo)
┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0].sources[0] (Combo)
┃ ┃ ┃ ┃ ┃  Info Combo running as Chain(Include, Exclude)
┃ ┃ ┃ ┃ ┃ engine.transformations[0].validated.merge.transformations[0].sources[0].<combo> (Chain)
┃ ┃ ┃ ┃ ┃  Info Running Chain(Include, Exclude)
┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0].sources[0].<combo>.transformations[0] (Include)
┃ ┃ ┃ ┃ ┃ ┃  Info Will include [**]
┃ ┃ ┃ ┃ ┃ ┃ Debug .gitignore matched [**] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug .tanzuignore matched [**] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug DEPLOYING.md matched [**] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug LICENSE matched [**] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug README.md matched [**] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug catalog/catalog-info.yaml matched [**] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug config/workload.yaml matched [**] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug package-lock.json matched [**] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug package.json matched [**] -> included
┃ ┃ ┃ ┃ ┃ ┗ Debug server.js matched [**] -> included
┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0].sources[0].<combo>.transformations[1] (Exclude)
┃ ┃ ┃ ┃ ┃ ┃  Info Will exclude [package.json, config/**, catalog/**, README.md, DEPLOYING.md]
┃ ┃ ┃ ┃ ┃ ┃ Debug .gitignore didn't match [package.json, config/**, catalog/**, README.md, DEPLOYING.md] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug .tanzuignore didn't match [package.json, config/**, catalog/**, README.md, DEPLOYING.md] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug DEPLOYING.md matched [package.json, config/**, catalog/**, README.md, DEPLOYING.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug LICENSE didn't match [package.json, config/**, catalog/**, README.md, DEPLOYING.md] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug README.md matched [package.json, config/**, catalog/**, README.md, DEPLOYING.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug catalog/catalog-info.yaml matched [package.json, config/**, catalog/**, README.md, DEPLOYING.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug config/workload.yaml matched [package.json, config/**, catalog/**, README.md, DEPLOYING.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug package-lock.json didn't match [package.json, config/**, catalog/**, README.md, DEPLOYING.md] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug package.json matched [package.json, config/**, catalog/**, README.md, DEPLOYING.md] -> excluded
┃ ┃ ┃ ┃ ┗ ┗ Debug server.js didn't match [package.json, config/**, catalog/**, README.md, DEPLOYING.md] -> included
┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0].sources[1] (Combo)
┃ ┃ ┃ ┃ ┃  Info Combo running as Chain(Include, chain...)
┃ ┃ ┃ ┃ ┃ engine.transformations[0].validated.merge.transformations[0].sources[1].<combo> (Chain)
┃ ┃ ┃ ┃ ┃  Info Running Chain(Include, ReplaceText)
┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0].sources[1].<combo>.transformations[0] (Include)
┃ ┃ ┃ ┃ ┃ ┃  Info Will include [package.json]
┃ ┃ ┃ ┃ ┃ ┃ Debug .gitignore didn't match [package.json] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug .tanzuignore didn't match [package.json] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug DEPLOYING.md didn't match [package.json] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug LICENSE didn't match [package.json] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug README.md didn't match [package.json] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug catalog/catalog-info.yaml didn't match [package.json] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug config/workload.yaml didn't match [package.json] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug package-lock.json didn't match [package.json] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug package.json matched [package.json] -> included
┃ ┃ ┃ ┃ ┃ ┗ Debug server.js didn't match [package.json] -> excluded
┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0].sources[1].<combo>.transformations[1] (ReplaceText)
┃ ┃ ┃ ┃ ┗ ┗  Info Will replace [node-express->node-express]
┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0].sources[2] (Combo)
┃ ┃ ┃ ┃ ┃  Info Condition (#includeTap) evaluated to true
┃ ┃ ┃ ┃ ┃  Info Combo running as Chain(Include, chain...)
┃ ┃ ┃ ┃ ┃ engine.transformations[0].validated.merge.transformations[0].sources[2].<combo> (Chain)
┃ ┃ ┃ ┃ ┃  Info Condition (#includeTap) evaluated to true
┃ ┃ ┃ ┃ ┃  Info Running Chain(Include, ReplaceText, Combo)
┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0].sources[2].<combo>.transformations[0] (Include)
┃ ┃ ┃ ┃ ┃ ┃  Info Will include [config/workload.yaml]
┃ ┃ ┃ ┃ ┃ ┃ Debug .gitignore didn't match [config/workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug .tanzuignore didn't match [config/workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug DEPLOYING.md didn't match [config/workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug LICENSE didn't match [config/workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug README.md didn't match [config/workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug catalog/catalog-info.yaml didn't match [config/workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug config/workload.yaml matched [config/workload.yaml] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug package-lock.json didn't match [config/workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug package.json didn't match [config/workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┗ Debug server.js didn't match [config/workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0].sources[2].<combo>.transformations[1] (ReplaceText)
┃ ┃ ┃ ┃ ┃ ┗  Info Will replace [node-express->node-express]
┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0].sources[2].<combo>.transformations[2] (Combo)
┃ ┃ ┃ ┃ ┃ ┃  Info Combo running as Chain(Merge(merge), UniquePath(UseFirst))
┃ ┃ ┃ ┃ ┃ ┃ engine.transformations[0].validated.merge.transformations[0].sources[2].<combo>.transformations[2].merge (Chain)
┃ ┃ ┃ ┃ ┃ ┃  Info Running Chain(Merge, UniquePath)
┃ ┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0].sources[2].<combo>.transformations[2].merge.transformations[0] (Merge)
┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Running Merge(InvokeFragment, Combo)
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0].sources[2].<combo>.transformations[2].merge.transformations[0].sources[0] (InvokeFragment)
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0].sources[2].<combo>.transformations[2].merge.transformations[0].sources[0].validated (Combo)
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Combo running as Chain(chain)
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ engine.transformations[0].validated.merge.transformations[0].sources[2].<combo>.transformations[2].merge.transformations[0].sources[0].validated.chain (Chain)
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Running Chain(Combo, Exclude)
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0].sources[2].<combo>.transformations[2].merge.transformations[0].sources[0].validated.chain.transformations[0] (Combo)
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Condition (#bsGitRepository != null) evaluated to false
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ null ()
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0].sources[2].<combo>.transformations[2].merge.transformations[0].sources[0].validated.chain.transformations[1] (Exclude)
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Condition (#bsGitRepository == null) evaluated to true
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Will exclude [**]
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug config/workload.yaml matched [**] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ ┗ ┗ Debug README.md matched [**] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0].sources[2].<combo>.transformations[2].merge.transformations[0].sources[1] (Combo)
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Combo running as Include
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ engine.transformations[0].validated.merge.transformations[0].sources[2].<combo>.transformations[2].merge.transformations[0].sources[1].include (Include)
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Will include [**]
┃ ┃ ┃ ┃ ┃ ┃ ┗ ┗ Debug config/workload.yaml matched [**] -> included
┃ ┃ ┃ ┃ ┗ ┗ ╺ engine.transformations[0].validated.merge.transformations[0].sources[2].<combo>.transformations[2].merge.transformations[1] (UniquePath)
┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0].sources[3] (Combo)
┃ ┃ ┃ ┃ ┃  Info Condition (#includeTap) evaluated to true
┃ ┃ ┃ ┃ ┃  Info Combo running as Chain(Include, chain...)
┃ ┃ ┃ ┃ ┃ engine.transformations[0].validated.merge.transformations[0].sources[3].<combo> (Chain)
┃ ┃ ┃ ┃ ┃  Info Condition (#includeTap) evaluated to true
┃ ┃ ┃ ┃ ┃  Info Running Chain(Include, ReplaceText)
┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0].sources[3].<combo>.transformations[0] (Include)
┃ ┃ ┃ ┃ ┃ ┃  Info Will include [catalog/catalog-info.yaml]
┃ ┃ ┃ ┃ ┃ ┃ Debug .gitignore didn't match [catalog/catalog-info.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug .tanzuignore didn't match [catalog/catalog-info.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug DEPLOYING.md didn't match [catalog/catalog-info.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug LICENSE didn't match [catalog/catalog-info.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug README.md didn't match [catalog/catalog-info.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug catalog/catalog-info.yaml matched [catalog/catalog-info.yaml] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug config/workload.yaml didn't match [catalog/catalog-info.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug package-lock.json didn't match [catalog/catalog-info.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug package.json didn't match [catalog/catalog-info.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┗ Debug server.js didn't match [catalog/catalog-info.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.merge.transformations[0].sources[3].<combo>.transformations[1] (ReplaceText)
┃ ┃ ┃ ┃ ┗ ┗  Info Will replace [node-express->node-express]
┃ ┃ ┃ ┃ ┏ README (Combo)
┃ ┃ ┃ ┃ ┃  Info Combo running as Chain(Merge(merge), UniquePath(Append))
┃ ┃ ┃ ┃ ┃ README.merge (Chain)
┃ ┃ ┃ ┃ ┃  Info Running Chain(Merge, UniquePath)
┃ ┃ ┃ ┃ ┃ ┏ README.merge.transformations[0] (Merge)
┃ ┃ ┃ ┃ ┃ ┃  Info Running Merge(Combo, Combo)
┃ ┃ ┃ ┃ ┃ ┃ ┏ README.merge.transformations[0].sources[0] (Combo)
┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Combo running as Chain(Include, chain...)
┃ ┃ ┃ ┃ ┃ ┃ ┃ README.merge.transformations[0].sources[0].<combo> (Chain)
┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Running Chain(Include, ReplaceText)
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┏ README.merge.transformations[0].sources[0].<combo>.transformations[0] (Include)
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Will include [README.md]
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug .gitignore didn't match [README.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug .tanzuignore didn't match [README.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug DEPLOYING.md didn't match [README.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug LICENSE didn't match [README.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug README.md matched [README.md] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug catalog/catalog-info.yaml didn't match [README.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug config/workload.yaml didn't match [README.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug package-lock.json didn't match [README.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug package.json didn't match [README.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ Debug server.js didn't match [README.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┏ README.merge.transformations[0].sources[0].<combo>.transformations[1] (ReplaceText)
┃ ┃ ┃ ┃ ┃ ┃ ┗ ┗  Info Will replace [node-express->node-express]
┃ ┃ ┃ ┃ ┃ ┃ ┏ README.merge.transformations[0].sources[1] (Combo)
┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Condition (#includeTap) evaluated to true
┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Combo running as Chain(Include, chain...)
┃ ┃ ┃ ┃ ┃ ┃ ┃ README.merge.transformations[0].sources[1].<combo> (Chain)
┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Condition (#includeTap) evaluated to true
┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Running Chain(Include, ReplaceText, RewritePath)
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┏ README.merge.transformations[0].sources[1].<combo>.transformations[0] (Include)
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Will include [DEPLOYING.md]
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug .gitignore didn't match [DEPLOYING.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug .tanzuignore didn't match [DEPLOYING.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug DEPLOYING.md matched [DEPLOYING.md] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug LICENSE didn't match [DEPLOYING.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug README.md didn't match [DEPLOYING.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug catalog/catalog-info.yaml didn't match [DEPLOYING.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug config/workload.yaml didn't match [DEPLOYING.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug package-lock.json didn't match [DEPLOYING.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug package.json didn't match [DEPLOYING.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ Debug server.js didn't match [DEPLOYING.md] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┏ README.merge.transformations[0].sources[1].<combo>.transformations[1] (ReplaceText)
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗  Info Will replace [node-express->node-express]
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┏ README.merge.transformations[0].sources[1].<combo>.transformations[2] (RewritePath)
┃ ┃ ┃ ┃ ┃ ┗ ┗ ┗ Debug Path 'DEPLOYING.md' matched '^(?<folder>.*/)?(?<filename>([^/]+?|)(?=(?<ext>\.[^/.]*)?)$)' with groups {ext=.md, folder=null, filename=DEPLOYING.md, g0=DEPLOYING.md, g1=null, g2=DEPLOYING.md, g3=DEPLOYING.md, g4=.md} and was rewritten to 'README.md'
┃ ┃ ┃ ┃ ┃ ┏ README.merge.transformations[1] (UniquePath)
┃ ┃ ┃ ┗ ┗ ┗ Debug Multiple representations for path 'README.md', will concatenate them together
┃ ┗ ┗ ╺ engine.transformations[0].validated.merge.transformations[1] (UniquePath)
┗ ╺ engine.transformations[1] (UniquePath)
```

package transformers

import (
	"github.com/obot-platform/tools/knowledge/pkg/datastore/types"
)

func DefaultDocumentTransformers(filetype string) (transformers []types.DocumentTransformer) {
	switch filetype {
	case ".md", "text/markdown":
		transformers = append(transformers, &FilterMarkdownDocsNoContent{})
		return transformers
	default:
	}

	return
}

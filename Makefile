build:
	rm -rf ./dist/*
	yarn run build
	@echo Compressing Assets...
	find dist/ -iname '*.html' -o -iname '*.css' -o -iname '*.eot' -o -iname '*.svg' -o -iname '*.ttf' -o -iname '*.woff' -o -iname '*.woff2' | xargs zopfli
	find dist/ -iname '*.html' -o -iname '*.css' -o -iname '*.eot' -o -iname '*.svg' -o -iname '*.ttf' -o -iname '*.woff' -o -iname '*.woff2' | xargs brotli

deploy: build
	rsync -rzvhP --delete dist/ portfolio:/srv/chip.sh/

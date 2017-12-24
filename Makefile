build:
	rm -rf ./dist
	yarn run build
	@echo Compressing Assets...
	find dist/ -iname '*.html' -o -iname '*.css' -print0 | xargs -0 zopfli
	find dist/ -iname '*.html' -o -iname '*.css' -print0 | xargs -0 brotli

deploy: build
	rsync -rzvhP --delete dist/ portfolio:/srv/chip.sh/

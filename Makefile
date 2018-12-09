run:
	docker run -it reamer

setup:
	docker build -t reamerhouse .

install:
	sudo usermod -aG docker $(USER)
	sudo systemctl start docker.service



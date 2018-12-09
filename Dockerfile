FROM fedora:29

WORKDIR /reamer

COPY . /reamer

RUN dnf install python -y

CMD ["date"]
#CMD ["dnf", "install", "python", "-y"]
#CMD ["python", "test.py"]


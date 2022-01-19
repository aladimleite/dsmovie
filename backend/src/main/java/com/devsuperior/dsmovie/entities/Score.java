package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="tb_score")
public class Score {

	@EmbeddedId	
	private ScorePK id = new ScorePK(); //ScorePK() é uma classe auxiliar com chave composta.
	private Double value;
	
	public Score() {		
	}

	//Associo o filme com Score.
	public void setMovie(Movie movie) {
		id.setMovie(movie);
	}

	//Associo o usuário com Score.
	public void setUser(User user) {
		id.setUser(user);
	}
	
	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
	
	
}
